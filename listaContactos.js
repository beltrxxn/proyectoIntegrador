let misContactos = [
  {
      id: 1028480755,
    nombres: "Nicolas Alexander",
    apellidos: "Cetina Yanquen",
    telefono: 3133517517,
    ubicacion: {
      ciudad: "Bogota",
      direccion: "calle 17 num 14-78"
    }
},
{
id: 1023488141,
nombres: "Leidy Natalia",
apellidos: "Beltran Caucha",
telefono: 3196050797,
ubicacion: {
  ciudad: "Bogota",
  direccion: "calle 17 num 13-06"
}
},
  ];

  const añadirContacto = (nombresApellidos, telefonoAgregar, ciudadAgregar, direccionAgregar) =>{
      const idMin = 1000000;
      const idMax = 9999999;
      let idContador = Math.floor(Math.random() * (idMax - idMin) + idMin);
      //SEPARAR NOMBRES Y APELLIDOS
      nombresApellidos = nombresApellidos.split(" ");
      let nombresAgregar = nombresApellidos[0];
      let apellidosAgregar = nombresApellidos[1];

      // ITERAR SOBRE LA LISTA CONTACTO

      for (const contacto of misContactos){
          if(contacto.nombres == nombresAgregar && contacto.apellidos == apellidosAgregar){
              console.log('El contacto "${nombresAgregar} ${apellidosAgregar}" ya se encuentra en la lista de contactos. ');
              return; // para la funcion
          }
      }
      // añadir un nuevo contacto
      const nuevoContacto ={
          id: idContador,
          nombres: nombresAgregar,
          apellidos: apellidosAgregar,
          ubicacion:{
              ciudad: ciudadAgregar,
              direccion: direccionAgregar
          }
      }
      misContactos.push(nuevoContacto);
      console.log('El contacto "${nombresAgregar} $(apellidosAgregar}" ha sido añadida.');

      // borrar contactos
      const borrarContacto = (contactoEliminar) => {
          contactoEliminar = contactoEliminar.split(" ");
          let nombresAgregar = contactoEliminar[0];
          let apellidosAgregar = contactoEliminar[1];

          // se itera
          for (const contacto of misContactos){
              if(contacto.nombres == nombresAgregar && contacto.apellidos == apellidosAgregar){
                  const index = misContactos.indexOf(contacto);
                  misContactos.splice(index, 1);
                  console.log ('El contacto "${nombresAgregar} ${apellidosAgregar}" ha sido eliminado.');
                  return; // parar funcion
              }
          }
          console.log ('no se ha encontrado el contacto "${nombresAgregar} ${apellidosAgregar}" en la lista de contactos.');
      }
      // actualizar un contacto 
      const actualizarContacto = (idIngresar, contactoActualizar, telefonoAgregar, ciudadAgregar, direccionAgregar) =>{
          contactoActualizar = contactoActualizar.split(" ");
          let nombresAgregar = contactoActualizar[0];
          let apellidosAgregar = contactoActualizar[1];

          for (const contacto of misContactos){
              if(contacto.id == idIngresar){
                  contacto.nombres = nombresAgregar;
                  contacto.apellidos = apellidosAgregar;
                  contacto.telefono = telefonoAgregar;
                  contacto.ubicacion.ciudad = ciudadAgregar;
                  contacto.ubicacion.direccion = direccionAgregar;
                  console.log ('Se ha actualizado los datos del contacto "${nombresAgregar} ${apellidosAgregar}" en la lista de contactos. ');
                  return; // para la funcion ya se ha encontrado el contacto y se ha eliminado
              }

          }
          console.log('No se ha encontrado el contacto "${nombresAgregar} ${apellidosAgregar}" en la lista de contactos. ');
      }
      const imprimirMisContactos = ()=>{
          console.log("La lista de contactos\n tienes los siguientes contactos:");
          for (const contacto of misContactos) {
              console.log ('');
              console.log('-Contacto-\nID: ${contacto.id}\nNombre: ${contacto.nombres}\nApellidos: ${contacto.apellidos}');
              console.log ('Telefono: ${contacto.telefono}\nCiudad: ${contacto.ubicacion.ciudad}\nDireccion: ${contacto.ubicacion.direccion}');
              console.log(' ');
          }
      }
  }
// funcion para correr todo el testeo del programa
  function main(){
      // llamando las respectivas funciones para testeo
      imprimirMisContactos();
      añadirContacto("Pepito Perez", "302 557 5888", "Bogota", "Chia");

      // dos contactos mas
      añadirContacto("Natalia", "319 7068598", "Mosquera", "Mallorca");
      borrarContacto("Pepito Perez");

      borrarContacto("Esteban Vera");
      console.log('');

      actualizarContacto(123456789, "Martha Solano", "3137064645", "Bogota", "calle 17 num 13-06");
      console.log('');
      imprimirMisContactos();
  }

  main()