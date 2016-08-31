$('document').ready(function() {
  console.log('called');
  var xhttp;
  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  xhttp.open('GET', 'ows.omegamoulding.com/service.asmx/Login?Salesman=2&Password=passhouse HTTP/1.1', true);
  xhttp.send();
  console.log('sending');
  console.log(xhttp.responseText);
});

/*
$( 'document' ).ready(function(){
  $.get('http://ows.omegamoulding.com/service.asmx/Login?Salesman=2&Password=passhouse HTTP/1.1', null, function(data, status, xhr) {
    console.log('sent');
    console.log(status);
    console.log(data);
    console.log(xhr);
  });
});

$( 'document' ).ready(function(){
  $.ajax({
    url: 'http://ows.omegamoulding.com/service.asmx/Login?Salesman=2&Password=passhouse',
    type: 'GET',
    xhrFields: {
      withCredentials: true
    }
  })
  .done(function( data ) {

  });
});
*/
