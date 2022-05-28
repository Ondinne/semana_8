/* Escenario para la versión 4.41 */
import { GOSTH_VERSION } from "./env";
import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { 
  login, 
  crearPost, 
  listarPostsAdmin 
} from "./functions";

describe('Escenario 1:', function () {

  it('Al loggearse y crear un post, este está en la interfaz de admin', function () {
    const randomTitle = faker.random.alpha(10)
    const randomBody = faker.lorem.lines()

    let json = {
      version : GOSTH_VERSION,
      escenario: "escenario01.spec.js",
      images: []
    };

    login();
    cy.wait(500);
    cy.screenshot(GOSTH_VERSION + '/01_login', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/01_login')
    crearPost(randomTitle, randomBody);
    cy.wait(500);
    cy.screenshot(GOSTH_VERSION + '/02_crearPost', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/02_crearPost')
    listarPostsAdmin().should('include.text', randomTitle)
    cy.screenshot(GOSTH_VERSION + '/03_listarPostsAdmin', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/03_listarPostsAdmin')

    let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
    cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
  })
})