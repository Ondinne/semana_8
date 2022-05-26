import { GOSTH_VERSION } from "./env";

import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  agregarImagenPost,
  listarPostsBlog,
  verPostBlog 
} from "./functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let randomTitle = faker.random.alpha(10)
    let randomBody = faker.lorem.lines()

    let json = {
      version : GOSTH_VERSION,
      escenario: "escenario17.spec.js",
      images: []
    };

    cy.wait(1000);
    login();
    cy.screenshot(GOSTH_VERSION + '/01_login', {overwrite: true})
    json.images.push('escenario17.spec.js/' + GOSTH_VERSION + '/01_login.png')
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.screenshot(GOSTH_VERSION + '/02_eliminarTodosLosPost', {overwrite: true})
    json.images.push('escenario17.spec.js/' + GOSTH_VERSION + '/02_eliminarTodosLosPost.png')
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.screenshot(GOSTH_VERSION + '/03_crearPost', {overwrite: true})
    json.images.push('escenario17.spec.js/' + GOSTH_VERSION + '/03_crearPost.png')
    cy.wait(1000);
    publicarPost();
    cy.screenshot(GOSTH_VERSION + '/04_publicarPost', {overwrite: true})
    json.images.push('escenario17.spec.js/' + GOSTH_VERSION + '/04_publicarPost.png')
    cy.wait(1000);
    listarPostsBlog();
    cy.screenshot(GOSTH_VERSION + '/05_listarPostsBlog', {overwrite: true})
    json.images.push('escenario17.spec.js/' + GOSTH_VERSION + '/05_listarPostsBlog.png')
    cy.wait(1000);
    verPostBlog();
    cy.screenshot(GOSTH_VERSION + '/06_verPostBlog', {overwrite: true})
    json.images.push('escenario17.spec.js/' + GOSTH_VERSION + '/06_verPostBlog.png')
    cy.wait(1000);

    let result = "var " + 'ghost_' + GOSTH_VERSION.substring(0, 1) + " = " + JSON.stringify(json);
    cy.writeFile('cypress/screenshots/' + GOSTH_VERSION + '.js', result)

    cy.get('body').then(($ele) => {

        if ($ele.find('.article-title').length > 0) {
            cy.get(`.article-title`).should('include.text', randomTitle);
        }

        if ($ele.find(".post-full-title").length > 0) {
            cy.get(`.post-full-title`).should('include.text', randomTitle);
        }
        
    })

    
  })
})