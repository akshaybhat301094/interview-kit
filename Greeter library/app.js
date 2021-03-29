var g = G$('John', 'Doe');

// g.log().setLang('es').log().greet();

$('#login').click(function () {
  var loginGrtr = G$('Akshay', 'Bhat');

  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true);
});
