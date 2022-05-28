//Login - Editar el contenido de un post publicado -  Listar posts en interfaz de administrador

import { GOSTH_VERSION } from "./env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost } from "./functions";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";

describe('Escenario 3', function () {
    it('Iniciar sesión, editar un post y listar post', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        let json = {
            version : GOSTH_VERSION,
            escenario: "escenario03.spec.js",
            images: []
        };

        //login
        cy.visit(URL + '/ghost');
        cy.wait(1000);
        cy.get('.email').type(LOGIN_EMAIL, { force: true });
        cy.wait(1000);
        cy.screenshot(GOSTH_VERSION + '/01_login', {overwrite: true})
        json.images.push('escenario03.spec.js/' + GOSTH_VERSION + '/01_login')
        cy.wait(1000);
        cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
        cy.wait(1000);

        //crear post
        cy.visit(URL + '/ghost/#/editor/post');
        cy.wait(1000);
        cy.get('.gh-editor-title').type(postTitle, { force: true });
        cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(postBody);
        cy.wait(1000);
        cy.screenshot(GOSTH_VERSION + '/02_crearPost', {overwrite: true})
        json.images.push('escenario03.spec.js/' + GOSTH_VERSION + '/02_crearPost')
        cy.wait(1000);
        cy.get('body').then(($ele) => {

            if ($ele.find('.gh-editor-back-button').length > 0) {
                cy.get('.gh-editor-back-button').click({ force: true })
            }

            if ($ele.find("a[href='#/posts/']").length > 0) {
                cy.get("a[href='#/posts/']").first().click({ force: true })
            }
        })

        //editar post
        cy.get('.gh-content-entry-title').first().click({force:true});
        cy.wait(1000);
        cy.get('.gh-editor-title').type(' con Titulo Editado', { force: true });
        cy.wait(1000);
        cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(' con contenido editado');
        cy.wait(1000);
        cy.screenshot(GOSTH_VERSION + '/03_editarPost', {overwrite: true})
        json.images.push('escenario03.spec.js/' + GOSTH_VERSION + '/03_editarPost')
        cy.wait(1000);
        cy.get('body').then(($ele) => {

            if ($ele.find('.gh-editor-back-button').length > 0) {
                cy.get('.gh-editor-back-button').click({ force: true })
            }

            if ($ele.find("a[href='#/posts/']").length > 0) {
                cy.get("a[href='#/posts/']").first().click({ force: true })
            }
        })

        let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
        cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)
    })
})
