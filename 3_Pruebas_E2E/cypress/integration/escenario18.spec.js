import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  agregarImagenPost,
  listarPostsBlog,
  verPostBlog 
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
    agregarImagenPost();
    cy.screenshot('04_agregarImagenPost')
    cy.wait(1000);
    listarPostsBlog();
    cy.screenshot('05_listarPostsBlog')
    cy.wait(1000);
    verPostBlog();
    cy.screenshot('06_verPostBlog')
    cy.wait(1000);

    cy.get(`.article-title`).should('include.text', randomTitle);
    cy.get(`.article-image`).should('exist');
  })
})