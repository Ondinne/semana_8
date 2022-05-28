import { GOSTH_VERSION } from "./env";

import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  listarPostsAdmin 
} from "./functions";


describe('Escenario 2', function () {
  it('login - publicar post - ver detalle post', function () {
    let randomTitle = faker.random.alpha(10)
    let randomBody = faker.lorem.lines()

    let json = {
      version : GOSTH_VERSION,
      escenario: "escenario02.spec.js",
      images: []
    };

    cy.wait(1000);
    login();
    cy.screenshot(GOSTH_VERSION + '/01_login', {overwrite: true})
    json.images.push('escenario02.spec.js/' + GOSTH_VERSION + '/01_login')
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.screenshot(GOSTH_VERSION + '/02_eliminarTodosLosPost', {overwrite: true})
    json.images.push('escenario02.spec.js/' + GOSTH_VERSION + '/02_eliminarTodosLosPost')
    cy.wait(1000);

    cy.screenshot(GOSTH_VERSION + '/05_listarPostsAdmin', {overwrite: true})
    json.images.push('escenario02.spec.js/' + GOSTH_VERSION + '/05_listarPostsAdmin')

    let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
    cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)

  })
})