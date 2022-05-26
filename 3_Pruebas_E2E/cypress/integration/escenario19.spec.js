import { URL, LOGIN_EMAIL, LOGIN_PASSWORD, NEW_PASSWORD } from "./env";

describe('Escenario 19:', function () {

  it('Al eliminar cambiar la contraseña, es posible usar la nueva para loggearse', function () {
    login(LOGIN_PASSWORD);
    cy.wait(1000);
    cy.screenshot('01-login')
    cy.get('.gh-user-avatar').click()
    cy.get('a[href^="#/settings/staff/"]').click()
    cy.wait(1000)
    cy.screenshot('02-abrirPerfil')
    cy.get('#user-password-old').type(LOGIN_PASSWORD)
    cy.get('#user-password-new').type(NEW_PASSWORD)
    cy.get('#user-new-password-verification').type(NEW_PASSWORD)
    cy.get('button:contains("Change Password")').click()
    cy.wait(500)
    cy.screenshot('03-cambiarContraseña')
    cy.visit(URL + '/ghost/#/signout')
    cy.wait(500)
    cy.screenshot('04-logout')
    login(NEW_PASSWORD);
    cy.screenshot('05-login')
  })
})


function login(password) {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(password + '{enter}', { force: true });
  cy.wait(1000);
}
