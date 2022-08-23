function registroMaterias (){
    var materia = $('#txtMateria').val();
    var year    = $('#yearLectivo').val();
    var departamento = $('#txtDepartamento').val();
    var nivel = $('#txtNivel').val();
    var paralelo = $('#txtParalelo').val();
    var docente = $('#txtDocente').val();
    var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/insertarMateria.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'materia':materia,'year':year,'departamento':departamento,'nivel':nivel,'paralelo':paralelo,'docente':docente},
        success : function (response)
        {
         if (response == 'registrado') {
            $('#myModal').modal('show');
         }else{
            alert(error);

         }


        }



    })

}

function registroDocente (){
    var nombre = $('#txtNombre').val();
    var apellidos = $('#txtApellido').val();
    var nivel = $('#txtNivel').val();
    var telefono    = $('#txtTelefono').val();
    var direccion = $('#txtDireccion').val();
    var email = $('#txtCorreo').val();
    var paralelo = $('#txtParalelos').val();
    var docente = $('#txtDocente').val();
    var materias = $('#txtMaterias').val();
    var year    = $('#yearLectivo').val();
    var nummaterias = $('#numMateria').val(); 
    var salario = $('#numSalario').val(); 
    var usuario = $('#txtUsuario').val();
    var password = $('#txtPassword').val();
    var tipo_usuario = $('#txtTipo').val();
    var estatus = $('#txtStatus').val();


    var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/insertarDocente.php"

    $.ajax({
        type: 'POST',
        url : url,
        data : {'nombre':nombre,'apellidos':apellidos,'nivel':nivel,'telefono':telefono,'direccion':direccion,'paralelo':paralelo,'docente':docente,'materias':materias,'year':year,'nummaterias':nummaterias,'salario':salario,'usuario':usuario,'password':password,'tipo_usuario':tipo_usuario,'estatus':estatus},
        success : function (response)
        {
         if (response == 'registrado') {
            $('#myModal').modal('show');
         }else{
            alert(error);

         }


        }
    })
}

    function validaUsuario() {
        var usuario =  $('#txtUsuario').val();
        var password = $('#txtPassword').val();
        var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/validarusuario.php"

        $.ajax({
            type: 'POST',
            url : url,
            data : {'usuario': usuario, 'password':password},
            success: function(response)
            {
                if (response == 1) {
                    alert("Bienvenido " + usuario);
                    window.location = "http://localhost/CANGRECODERS-GROUP-1/06-Code/views/principal.html"; 
                }else{
                    alert("El usuario " + usuario + " no existe, o la contraseña es incorrecta");

                }
               

            }



        })


    }


    function registroEstudiante (){
        var nombre = $('#txtNombre').val();
        var apellidos = $('#txtApellido').val();
        var telefono    = $('#txtTelefono').val();
        var direccion = $('#txtDireccion').val();
        var email = $('#txtCorreo').val();
        var paralelo = $('#txtParalelos').val();
        var cedula = $('#txtCedula').val();
        var year    = $('#yearLectivo').val();
        var nummaterias = $('#numMateria').val(); 
        var usuario = $('#txtUsuario').val();
        var password = $('#txtPassword').val();
        var tipo_usuario = $('#txtTipo').val();
        var estatus = $('#txtStatus').val();
    
    
        var url = "http://localhost/CANGRECODERS-GROUP-1/06-Code/controller/insertarAlumno.php"
    
        $.ajax({
            type: 'POST',
            url : url,
            data : {'nombre':nombre,'apellidos':apellidos,'telefono':telefono,'direccion':direccion,'paralelo':paralelo,'cedula':cedula,'year':year,'nummaterias':nummaterias,'usuario':usuario,'password':password,'tipo_usuario':tipo_usuario,'estatus':estatus},
            success : function (response)
            {
             if (response == 1) {
                 console.log(response);
                $('#myModal').modal('show');
             }else{
                 console.log(response);
                alert('no se ingreso el registro');
    
             }
          }
          })
       }


       function listarUsuarios (){
        var url="http://localhost/CANGRECODERS-GROUP-1/06-Code/01WebApp/WebApp/controller/listarUsuarios.php"
        $.ajax({
            type: 'POST',
            url : url,
            success : function (response)
            {
            let datos = JSON.parse(response);
            console.log(response);
            let template = "";
            let templateTit = "";
            templateTit += `
            <table class="table" cellspacing="10" cellpadding="10">
            <thead>
            <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Cédula de Identidad</th>
            <th>Tipo de Usuario</th>
            </tr>
            </thead>
            <tbody id="usuarios_data"></tbody>`
            datos.forEach((elements) => {
                template += `
                <tr>
                <td>${elements.nombres}</td>
                <td>${elements.apellidos}</td>
                <td>${elements.cedula}</td>
                <td>${elements.tipo_usuario}</td>
                </tr>
                            
                `
                
            })
            $("#tabla_usuarios").html(templateTit);
             $("#usuarios_data").html(template);
            }
          })



       }