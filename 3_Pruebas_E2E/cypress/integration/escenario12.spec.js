import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  agregarImagenPost,
  despublicarPost,
  listarPostsAdmin,
  eliminarImagenPost,
  listarPostsBlog 
} from "./functions";


describe('Escenario 12', function () {
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
    agregarImagenPost();
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`.post-card-image`).should('exist');

    listarPostsAdmin();
    cy.wait(1000);
    despublicarPost();
    cy.wait(1000);
    eliminarImagenPost();
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`.post-card-image`).should('not.exist');
  })
})