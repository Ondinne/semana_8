import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  listarPostsAdmin 
} from "./functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let randomTitle = faker.random.alpha(10)
    let randomBody = faker.lorem.lines()

    cy.wait(1000);
    login();
    cy.screenshot('01_login')
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.screenshot('02_eliminarTodosLosPost')
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.screenshot('03_crearPost')
    cy.wait(1000);
    publicarPost();
    cy.screenshot('04_publicarPost')

    listarPostsAdmin().should('include.text', randomTitle);
    cy.screenshot('05_listarPostsAdmin')
  })
})