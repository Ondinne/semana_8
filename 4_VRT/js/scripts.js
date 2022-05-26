$(document).ready(function () {
  $('#ghost3').append('<h2>Ghost ' + ghost_3.version + '</h2>');
  $('#ghost3').append('<p>Escenario ' + ghost_3.escenario + '</p>');
  $.each(ghost_3.images, function (key, value) {
    let subtitle = '<a href="./cypress/screenshots/' + value + '.png" target="_blank">'+ value +'</a>'
    let image = '<img src="./cypress/screenshots/' + value + '.png" style="height: 300px; object-fit: cover; border: 1px solid black; padding: 10px; background-color: gray; border-radius: 15px"></br>';
    $('#ghost3').append(subtitle);
    $('#ghost3').append(image);
  });


  $('#ghost4').append('<h2>Ghost ' + ghost_4.version + '</h2>');
  $('#ghost4').append('<p>Escenario ' + ghost_4.escenario + '</p>');
  $.each(ghost_4.images, function (key, value) {
    let subtitle = '<a href="./cypress/screenshots/' + value + '.png" target="_blank">'+ value +'</a>'
    let image = '<img src="./cypress/screenshots/' + value + '.png" style="height: 300px; object-fit: cover; border: 1px solid black; padding: 10px; background-color: gray; border-radius: 15px"></br>';
    $('#ghost4').append(subtitle);
    $('#ghost4').append(image);
  }); 
});