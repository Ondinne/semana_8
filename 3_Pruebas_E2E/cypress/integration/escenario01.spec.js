import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { 
  login, 
  crearPost, 
  listarPostsAdmin 
} from "./functions";

describe('Escenario 1:', function () {

  it('Al loggearse y crear un post, este está en la interfaz de admin', function () {
    const randomTitle = faker.random.alpha(10)
    const randomBody = faker.lorem.lines()

    login();
    cy.wait(500);
    crearPost(randomTitle, randomBody);
    cy.wait(500);
    listarPostsAdmin().should('include.text', randomTitle)
  })
})