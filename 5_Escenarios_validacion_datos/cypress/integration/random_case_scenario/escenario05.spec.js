import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import {
  crearPost
} from "../functions";


describe('Escenario 5:', function () {

  it('Al loggearse, editar el título de un post y entrar como usuario, este se ha actualizado', function () {
    const randomTitle = faker.random.alpha(Math.random() * 200)
    const randomBody = faker.random.alpha(Math.random() * 200)

    login();
    cy.wait(500);
    crearPost(randomTitle, randomBody);
    cy.wait(500);
    cy.visit(URL + '/ghost/#/signout')
    cy.wait(1000)
    cy.visit(URL)
  })
})

function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}