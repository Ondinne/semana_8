import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import {
  crearPost,
} from "../functions";

describe('Escenario 1:', () => {
  it('Al loggearse y crear un post, este está en la interfaz de admin', () => {
    cy.fixture('pool.json').then((pool) => {
      login();
      cy.wait(500);
      crearPost(pool.caso_1.titulo, pool.caso_1.contenido);
      cy.wait(500);
      listarPostsAdmin().should('include.text', pool.caso_1.titulo)
    })
  })
})

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