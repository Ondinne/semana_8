/* Escenario para la versión 4.41 */
import { GOSTH_VERSION } from "./env";
import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";

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
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/01_login.png')
    crearPost(randomTitle, randomBody);
    cy.wait(500);
    cy.screenshot(GOSTH_VERSION + '/02_crearPost', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/02_crearPost.png')
    listarPostsAdmin().should('include.text', randomTitle)
    cy.screenshot(GOSTH_VERSION + '/03_listarPostsAdmin', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/03_listarPostsAdmin.png')

    let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
    cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
  })
})

function crearPost(title, body) {
  cy.get("a[href='#/editor/post/']").then($links => {
    cy.wrap($links[0]).click({ force: true });
    cy.wait(500);
    cy.get("textarea[placeholder='Post title']").type(title, { force: true })
    cy.get("div[contenteditable='true']").type(body, { force: true })
    cy.get("header section").children('.gh-publishmenu').click().then(() => {
      cy.get(".gh-publishmenu-button").click().then(() => {
        cy.get(".modal-footer").children('.gh-btn-black').click()
      })
    }
    )
  });
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
  return cy.get('.gh-posts-list-item');
}

/* Escenario para la versión 3.42 */
/*
import { GOSTH_VERSION } from "./env";
import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";

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
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/01_login.png')
    crearPost(randomTitle, randomBody);
    cy.wait(500);
    cy.screenshot(GOSTH_VERSION + '/02_crearPost', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/02_crearPost.png')
    listarPostsAdmin().should('include.text', randomTitle)
    cy.screenshot(GOSTH_VERSION + '/03_listarPostsAdmin', {overwrite: true})
    json.images.push('escenario01.spec.js/' + GOSTH_VERSION + '/03_listarPostsAdmin.png')

    let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
    cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
  })
})

function crearPost(title, body) {
  cy.get("a[href='#/editor/post/']").then($links => {
    cy.wrap($links[0]).click({ force: true });
    cy.wait(500);
    cy.get("textarea[placeholder='Post Title']").type(title, { force: true })
    cy.get("div[contenteditable='true']").type(body, { force: true })
    cy.get("header section").children('.gh-publishmenu').click().then(() => {
      cy.get(".gh-publishmenu-button").click()
    }
    )
  });
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
  return cy.get('.gh-posts-list-item');
}
*/