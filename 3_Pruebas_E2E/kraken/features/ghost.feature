Feature: Pruebas E2E en la pagina de ghost.

@user20 @web
Scenario: El usuario inicia sesión, crea un nuevo post, lista los posts, crea un nuevo post con el mismo contenido del anterior, y lista nuevamente los posts.
Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click publish a post
  And I wait for 2 seconds
  And I click on the redact post title inputbox
  And I wait for 2 seconds
  And I enter post title'Prueba post duplicado escenario 20'
  And I wait for 2 seconds
  And I click on the redact post body inputbox
  And I wait for 2 seconds
  And I enter post body'Se está probando el escenario 20'
  And I click on the publish button
  And I wait for 2 seconds
  And I click on the publish button again
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I click on posts
  And I wait for 2 seconds
  And I click on published
  And I wait for 2 seconds
  And I click on new post button
  And I wait for 2 seconds
  And I click on the redact post title inputbox
  And I wait for 2 seconds
  And I enter post title'Prueba post duplicado escenario 20'
  And I wait for 2 seconds
  And I click on the redact post body inputbox
  And I wait for 2 seconds
  And I enter post body'Se está probando el escenario 20'
  And I click on the publish button
  And I wait for 2 seconds
  And I click on the publish button again
  And I wait for 2 seconds
  And I publish the post
  And I wait for 2 seconds
  And I click on posts
  And I wait for 2 seconds
  Then I click on published
  And I wait for 2 seconds
