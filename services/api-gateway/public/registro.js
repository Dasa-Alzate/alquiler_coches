const API_URL = '/users';

$('#btn_register').click(function() {
    alert("Has pulsado registar");
    var username = $('#username').val();
    var email = $('#email').val();
    var pass = $('#pass').val();
    
    var usr = {
        "username": username,
        "email": email,
        "pass": pass
    };
    
    $.ajax({
        url: `${API_URL}/auth/register`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(usr),
        success: () => {
          alert("Usuario registrado con exito");      
        },
        error: (xhr, status, error) => {
          console.error(`Error: ${error}`);
          alert(`Error al registrar usuario: ${xhr.responseText || 'Ha ocurrido un error'}`);
        }          
    });
    
});


