const opcionesAdmin = [
    { nombre: "Clases", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "Video", icono: "bi bi-circle", ruta: "/home/video", }
      ]
    },
  ];
  
  // *********************************************************************************
  
  const opcionesInvitado = [
    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/home/about", hijos: [], },
    { nombre: "Compras", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "Pendientes", icono: "bi bi-circle", ruta: "/home/admuser", },
        { nombre: "Productos", icono: "bi bi-circle", ruta: "/home/admuser" },
        { nombre: "Antiguas", icono: "bi bi-circle", ruta: "/home/admuser", }
      ]
    }
  ];
  
  export { opcionesAdmin, opcionesInvitado };