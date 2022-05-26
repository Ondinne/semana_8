/* Escenario para la versión 4.41 */
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD, GOSTH_VERSION } from "./env";

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
      eliminarPost(title);
      cy.wait(1000);
      cy.screenshot(GOSTH_VERSION + '/03_eliminarPost', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/03_eliminarPost')
      cy.visit(URL + '/ghost/#/signout')
      cy.wait(1000);
      listarPostsBlog();
      cy.screenshot(GOSTH_VERSION + '/04_listarPostsBlog', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/04_listarPostsBlog')
      cy.get(`h2:contains("${title}")`).should('have.length', 0)

      let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
      cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
    })
  })
})

function eliminarPost(title) {
  cy.get(`h3:contains(${title})`).click().then(() => {
    cy.wait(500)
    cy.get('button[Title="Settings"]').click()
    cy.wait(250)
    cy.get('button.settings-menu-delete-button').click()
    cy.wait(500)
    cy.get(".modal-footer").children(':contains("Delete")').click()
  })
}

function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}

function listarPostsAdmin() {
  cy.visit(URL + '/ghost/#/posts');
}

function listarPostsBlog() {
  cy.visit(URL)
}

/* Escenario para la versión 3.42 */
/*
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD, GOSTH_VERSION } from "./env";

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
    cy.get('h2.post-card-title:first').then($title => {
      const title = $title.text();

      login();
      cy.wait(1000);
      listarPostsAdmin();
      cy.screenshot(GOSTH_VERSION + '/02_listarPostsAdmin', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/02_listarPostsAdmin')
      eliminarPost(title);
      cy.wait(1000);
      cy.screenshot(GOSTH_VERSION + '/03_eliminarPost', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/03_eliminarPost')
      cy.visit(URL + '/ghost/#/signout')
      cy.wait(1000);
      listarPostsBlog();
      cy.screenshot(GOSTH_VERSION + '/04_listarPostsBlog', {overwrite: true})
      json.images.push('escenario10.spec.js/' + GOSTH_VERSION + '/04_listarPostsBlog')
      cy.get(`h2:contains("${title}")`).should('have.length', 0)

      let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
      cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
    })
  })
})

function eliminarPost(title) {
  cy.get(`h3:contains(${title})`).click().then(() => {
    cy.wait(500)
    cy.get('button[Title="Settings"]').click()
    cy.wait(250)
    cy.get('button.settings-menu-delete-button').click()
    cy.wait(500)
    cy.get(".modal-footer").children(':contains("Delete")').click()
  })
}

function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}

function listarPostsAdmin() {
  cy.visit(URL + '/ghost/#/posts');
}

function listarPostsBlog() {
  cy.visit(URL)
}
*/