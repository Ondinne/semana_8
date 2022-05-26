import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";


// 1. Crear un nuevo post
export function crearPost(titulo, contenido) {
    cy.visit(URL + '/ghost/#/editor/post');
    cy.wait(1000);
    cy.get('.gh-editor-title').type(titulo, { force: true });
    cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(contenido);
    cy.get('body').then(($ele) => {

        if ($ele.find('.gh-editor-back-button').length > 0) {
            cy.get('.gh-editor-back-button').click({ force: true })
        }

        if ($ele.find("a[href='#/posts/']").length > 0) {
            cy.get("a[href='#/posts/']").first().click({ force: true })
        }

    })

}

// 2. Publicar un post
export function publicarPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);

    cy.get('body').then(($ele) => {

        if ($ele.find('.epm-modal-container').length > 0) {
            cy.get('.epm-modal-container').find('.ember-view').click({ force: true })
        }

        if ($ele.find(".gh-publishmenu-footer").length > 0) {
            cy.get(".gh-publishmenu-footer").find('.ember-view').click({ force: true })
        }
        
    })
    
    cy.get('body').then(($ele) => {

        if ($ele.find('.gh-editor-back-button').length > 0) {
            cy.get('.gh-editor-back-button').click()
        }

        if ($ele.find("a[href='#/posts/']").length > 0) {
            cy.get("a[href='#/posts/']").first().click()
        }
        
    })
}

// 3. Ver los post publicados en el home del Blog
export function listarPostsBlog() {
    cy.visit(URL);
}

// 4. Ver detalle de un post
export function verPostBlog() {
    cy.get('.post-card-content-link').first().click();
    cy.wait(1000);
}

// 5. Editar el contenido de un post publicado
export function editarPost(titulo, contenido) {
    cy.get('.gh-content-entry-title').first().click();
    cy.wait(1000);
    cy.get('.gh-editor-title').type(titulo, { force: true });
    cy.wait(1000);
    cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(contenido);
    cy.get('body').then(($ele) => {

        if ($ele.find('.gh-editor-back-button').length > 0) {
            cy.get('.gh-editor-back-button').click({ force: true })
        }

        if ($ele.find("a[href='#/posts/']").length > 0) {
            cy.get("a[href='#/posts/']").first().click({ force: true })
        }
    })
}

// 6. Login
export function login() {
    cy.visit(URL + '/ghost');
    cy.wait(1000);
    cy.get('.email').type(LOGIN_EMAIL, { force: true });
    cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
    cy.wait(1000);
}

// 7. Listar posts en interfaz de administrador
export function listarPostsAdmin() {
    cy.visit(URL + '/ghost/#/posts');
    return cy.get('.gh-posts-list-item');
}

// 8. Logout
export function logout() {

}

// 9. Eliminar post
export function eliminarPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('.settings-menu-delete-button').click();
    cy.wait(1000);
    cy.get('.modal-content').find('.ember-view').click();
    cy.wait(1000);
}

// 10. Cambiar el acceso del post
export function cambiarAccesoPost() {

}

// 11. Agregar imagen al post
export function agregarImagenPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get("button[title='Settings']").click();
    cy.wait(1000);
    cy.get('.gh-image-uploader-unsplash').click({ force: true });
    cy.wait(1000);
    cy.get('.gh-unsplash-grid').find("a[href='#']").contains('Insert image').first().click({ force: true });
    cy.wait(1000);
    cy.get('.gh-editor-back-button').click({ force: true });
}

// 12. Eliminar imagen
export function eliminarImagenPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.get("button[title='Settings']").click();
    cy.wait(1000);
    cy.get('.image-cancel').first().click();
    cy.wait(1000);
    cy.get('.gh-editor-back-button').click({ force: true });
}

// 13. Despublicar el posts
export function despublicarPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-radio-button').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.gh-editor-back-button').click();
}

// 14. Cambiar contraseña
export function cambiarPassword() {

}

export function eliminarTodosLosPost() {
    cy.visit(URL + '/ghost/#/posts');
    cy.wait(2000);
    
    cy.get('body').then($body => {
        if ($body.find('.gh-post-list-title').length) {
            cy.get('.gh-post-list-title').each((items) => { 
                cy.get('.gh-post-list-title').first().click();
                cy.wait(1000);
                cy.get("button[title='Settings']").click();
                cy.wait(1000);
                cy.get('.settings-menu-delete-button').click();
                cy.wait(1000);
                cy.get('.modal-content').find('.ember-view').click();
                cy.wait(1000);

                cy.visit(URL + '/ghost/#/posts');
                cy.wait(1000);
            });
        }
    });

}