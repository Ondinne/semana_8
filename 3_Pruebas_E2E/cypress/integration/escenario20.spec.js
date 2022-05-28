//Login - crear nuevo post - Listar post en interfaz administrador
//crear nuevo post - listar post en interfaz administrador
//post con contenido duplicado

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost, listarPostsAdmin } from "./functions";


describe('Escenario 20', function () {
    it('creación de post con contenido duplicado', function () {

        login();
        cy.wait(1000);
        crearPost('Post escenario 20', 'Contenido post escenario 20');
        cy.wait(1000);
        listarPostsAdmin();
        cy.wait(1000);
        crearPost('Post escenario 20', 'Contenido post escenario 20');
        cy.wait(1000);
        listarPostsAdmin();      
    })
})