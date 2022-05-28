//Login - eliminar post - listar posts en interfaz de administrador

import { login, eliminarTodosLosPost } from "./functions";
import { faker } from "@faker-js/faker";

describe('Escenario 15', function () {
    it('login, eliminar posts, listar posts en administrador', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        login();
        cy.wait(1000);
        eliminarTodosLosPost();
    })
})

// function borrarTodosPosts() {
//     cy.get( 'body' ).then( $mainContainer => {
//         if ( cy.get('.gh-content-entry-title') != ' ' ) {
//             eliminarPost();
//             borrarTodosPosts();
//         }
//     } );
// }
