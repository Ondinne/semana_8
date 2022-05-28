//Login - crear post - publicar post - cambiar acceso a post
//logout - ver posts publicados en home del blog

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost, cambiarAccesoPost, listarPostsBlog } from "./functions";


describe('Escenario 9', function () {
    it('login, crear post, publicar posts, cambiar acceso, logout, ver posts blog', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        login();
        cy.wait(1000);
        crearPost(postTitle, postBody);
        cy.wait(1000);
        publicarPost();
        cy.wait(1000);
        cambiarAccesoPost();
        cy.wait(1000);
        logout();
        cy.wait(1000);
        listarPostsBlog();     
    })
})