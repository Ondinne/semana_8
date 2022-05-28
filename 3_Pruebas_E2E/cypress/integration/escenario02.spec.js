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
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    publicarPost();

    listarPostsAdmin().should('include.text', randomTitle);
    cy.screenshot('05_listarPostsAdmin')
  })
})