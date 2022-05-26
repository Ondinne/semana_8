//Ver los post publicados en el home del Blog - Login - Editar el contenido de un 
//post publicado -  Logout - Ver los post publicados en el home del Blog - Ver
//detalle de un post

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog } from "./functions";


describe('Escenario 6', function () {
    it('Ver posts blog, login, editar post, logout, ver posts blog, ver detalle post', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        cy.viewport(1280, 720)
        
        login();
        cy.screenshot('Escenario6_paso1_login')
        cy.wait(1000);
        crearPost(postTitle, postBody);
        cy.screenshot('Escenario6_paso2_crearPost')
        cy.wait(1000);
        editarPost(' con Título editado', ' Contenido editado')
        cy.screenshot('Escenario6_paso3_editarPost')
        cy.wait(1000);
        publicarPost();
        cy.screenshot('Escenario6_paso4_publicarPost')
        cy.wait(1000);
        logout();
        cy.screenshot('Escenario6_paso5_logout')
        cy.wait(1000);
        cy.visit(URL);
        cy.wait(1000);
        verPostBlog();
        cy.screenshot('Escenario7_paso7_verPostBlog')
    })
})