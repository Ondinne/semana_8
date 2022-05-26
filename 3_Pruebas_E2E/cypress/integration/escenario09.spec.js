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
        cy.screenshot('Escenario9_paso1_login')
        cy.wait(1000);
        crearPost(postTitle, postBody);
        cy.screenshot('Escenario9_paso2_crearPost')
        cy.wait(1000);
        publicarPost();
        cy.screenshot('Escenario9_paso3_publicarPost')
        cy.wait(1000);
        cambiarAccesoPost();
        cy.screenshot('Escenario9_paso4_cambiarAccesoPost')
        cy.wait(1000);
        logout();
        cy.screenshot('Escenario9_paso5_logout')
        cy.wait(1000);
        listarPostsBlog(); 
        cy.screenshot('Escenario9_paso6_listarPostsBlog')       
    })
})