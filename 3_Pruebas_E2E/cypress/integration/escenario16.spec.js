import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";

/**
 * Creates a new Cy command to execute a callback depending on 
 * the existence of DOM elements of a given selector
 **/
function ifExists(selector, callback) {
  cy.document().then(($document) => {
    const documentResult = $document.querySelectorAll(selector)
    if (documentResult.length) {
      console.log('TARGET EXISTS')
      callback()
    } else {
      console.log('TARGET DOESNT EXIST')
    }
  })
}

Cypress.Commands.add('ifExists', ifExists)

describe('Escenario 16:', function () {

  it('Al eliminar todos los posts, estos desaparecen para los usuarios', function () {
    login();
    cy.wait(1000);
    cy.screenshot('01-login')
    listarPostsAdmin();
    cy.wait(3000);
    cy.screenshot('02-listarPostsAdmin')
    borrarPostsExistentes();
    cy.screenshot('03-borrarPostsExistentes')

    cy.visit(URL + '/ghost/#/signout')
    cy.wait(1000);
    cy.screenshot('04-logout')
    listarPostsBlog();
    cy.screenshot('04-listarPostsBlog')
    assert(Cypress.$('.post-card').length === 0)
  })
})


function borrarPostsExistentes() {
  cy.ifExists('[href^="#/editor/post/"].permalink', () => {
    cy.get('[href^="#/editor/post/"].permalink').then($posts => {
      if ($posts.length > 0) {
        eliminarPost();
        cy.wait(500);
        borrarPostsExistentes();
      }
    })
  });
}

function eliminarPost() {
  cy.get(`h3:first`).click().then(() => {
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

