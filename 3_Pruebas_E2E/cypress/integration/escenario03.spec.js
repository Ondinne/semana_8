//Login - Editar el contenido de un post publicado -  Listar posts en interfaz de administrador

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost } from "./functions";


describe('Escenario 3', function () {
    it('Iniciar sesión, editar un post y listar post', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        cy.visit(URL + '/ghost');
        cy.wait(1000);
        cy.get('.email').type(LOGIN_EMAIL, { force: true });
        cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
        cy.wait(1000); 
        crearPost(postTitle, postBody);
        cy.wait(1000);
        editarPost(postTitle, postBody);
        cy.wait(1000);
    })
})
