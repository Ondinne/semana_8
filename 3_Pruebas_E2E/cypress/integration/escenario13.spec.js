import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";

describe('Escenario 13:', function () {

  it('Dada la existencia de mínimo un post, la cantidad de posts mostrados a los usuarios es igual o menor a la cantidad de posts mostrados en el tablero de administrador', function () {

    login();
    cy.wait(1000);
    cy.screenshot('01-login')
    cy.visit(URL + '/ghost/#/posts');
    cy.wait(1000)
    cy.screenshot('02-listarPostsAdmin')
    cy.get('[href^="#/editor/post/"].permalink').then($posts => {
      const numberOfPosts = $posts.length;
      cy.visit(URL + '/ghost/#/signout')
      cy.wait(500)
      cy.screenshot('03-logout')
      cy.visit(URL).then(() => {
        cy.wait(1000)
        cy.get('.post-card').then($showPosts => {
          const numberOfPostShown = $showPosts.length;
          console.log(numberOfPosts, numberOfPostShown)
          expect(numberOfPosts >= numberOfPostShown).to.be.true
          cy.screenshot('04-listarPostsBlog')
        })
      })
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


