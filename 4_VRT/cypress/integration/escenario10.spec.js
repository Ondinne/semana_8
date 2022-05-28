/* Escenario para la versión 4.41 */
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD, GOSTH_VERSION } from "./env";
import { 
  login, 
  eliminarPost, 
  listarPostsAdmin,
  listarPostsBlog
} from "./functions";

describe('Escenario 10:', function () {

  it('Al eliminar un post, este desaparece para los usuarios', function () {

    let json = {
      version : GOSTH_VERSION,
      escenario: "escenario10.spec.js",
      images: []
    };


    listarPostsBlog();
    cy.wait(500);
    cy.screenshot(GOSTH_VERSION + '/01_listarPostsBlog', {overwrite: true})
    json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/01_listarPostsBlog')
    cy.get('h2:first').then($title => {
      const title = $title.text();

      login();
      cy.wait(1000);
      listarPostsAdmin();
      cy.screenshot(GOSTH_VERSION + '/02_listarPostsAdmin', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/02_listarPostsAdmin')
      cy.visit(URL + '/ghost/#/signout')
      cy.wait(1000);
      listarPostsBlog();
      cy.screenshot(GOSTH_VERSION + '/04_listarPostsBlog', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/04_listarPostsBlog')

      let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
      cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
    })
  })
})