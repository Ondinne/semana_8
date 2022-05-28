import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  listarPostsBlog 
} from "./functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let randomTitle1 = faker.random.alpha(10)
    let randomBody1 = faker.lorem.lines()

    let randomTitle2 = faker.random.alpha(10)
    let randomBody2 = faker.lorem.lines()

    cy.wait(1000);
    login();
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost(randomTitle1, randomBody1);
    cy.wait(1000);
    crearPost(randomTitle2, randomBody2);
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`h2:contains("${randomTitle1}")`).should('not.exist');
  })
})