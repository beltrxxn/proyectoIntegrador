let misContactos = [
    {
      nombre: "Nicolas Alexander Cetina Yanquen",
  },
    {
      nombre: "Laura Valentina Beltran Caucha",
    }
    ];
  // Añadir un nuevo contacto con funcion tipo flecha sin return
  const agregarContacto = (nuevoContacto) => misContactos.push({nombre:nuevoContacto});
  //borrar contacto 
  const borrarContacto = (borrarUsuario) =>{
    let index = misContactos.findIndex ((item) => item.nombre === borrarUsuario);
    misContactos.splice(index,1)
  }
  // mostrar usuarios
  const mostrarUsuarios = () => console.log (misContactos)
  agregarContacto('pepito perez');
  agregarContacto('juan macias');
  mostrarUsuarios()
  borrarContacto('pepito perez');
  mostrarUsuarios()