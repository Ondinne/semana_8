Feature: Pruebas E2E en la pagina de ghost.

@user1 @web
Scenario: 1. Como usuario inicio sesion, creo un post y lo veo en la interfaz de administrador
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I click next
  And I wait for 2 seconds
  And I open my posts
  And I wait for 2 seconds
  And I click on "New Post" button
  And I wait for 2 seconds
  And I type a post title "$string_1"
  And I wait for 2 seconds
  And I type a post body "$string_2"
  And I wait for 2 seconds
  And I click on "Publish" dropdown
  And I wait for 2 seconds
  And I click on "Publish" button
  And I wait for 2 seconds
  And I click on "Publish" confirmation button
  And I wait for 2 seconds
  And I go back to admin dashboard
  And I wait for 2 seconds
  Then I should see "$$string_1"