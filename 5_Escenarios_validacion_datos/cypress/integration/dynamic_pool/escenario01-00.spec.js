import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import generatePool from '../poolGenerator.fn';
import {
  crearPost,
} from "../functions";

describe('Escenario 1:', function () {

  it('Al loggearse y crear un post, este está en la interfaz de admin', function () {
    const pool = generatePool();
    login();
    cy.wait(500);
    crearPost(pool?.caso_0?.titulo, pool?.caso_0?.contenido);
    cy.wait(500);
    listarPostsAdmin().should('include.text', pool?.caso_0?.titulo)
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