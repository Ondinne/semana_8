import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { 
  login, 
  editarPost
} from "./functions";

describe('Escenario 5:', function () {

  it('Al loggearse, editar el título de un post y entrar como usuario, este se ha actualizado', function () {
    const randomTitle = faker.random.alpha(10)
    const randomBody = faker.random.alpha(10)

    login();
    cy.wait(1000);
    editarPost(randomTitle, randomBody);
    cy.wait(1000);
    cy.visit(URL + '/ghost/#/signout')
    cy.wait(1000)
    cy.visit(URL)
  })
})