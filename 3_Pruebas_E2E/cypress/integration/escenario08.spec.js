//Login - Crear nuevo post - Listar posts en interfaz administrador
//Eliminar post - listar posts en interfaz administrador

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost } from "./functions";


describe('Escenario 8', function () {
    it('login, crear post, listar posts, eliminar post, listar posts', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        login();
        cy.screenshot('Escenario8_paso1_login')
        cy.wait(1000);
        crearPost(postTitle, postBody);
        cy.screenshot('Escenario8_paso2_crearPost')
        cy.wait(1000);
        eliminarPost();
        cy.screenshot('Escenario8_paso3_eliminarPost')
    })
})