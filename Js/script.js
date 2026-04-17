function acercaGO(){
    location.href='acercaDe.html'
}

function loginGO() {
    location.href='login.html'
}

function mainGO() {
    location.href='index.html'
}


function rulesGO() {
    location.href='OPERIS.html'
}



function LogIn() {
  let username = document.getElementById("us").value;
  let password = document.getElementById("pass").value;

  let empleados = ["Sergio Marin", "Alvaro Miranda", "Luis Carlos", "Matheus Blanco", "Jan Gomez", "Mariangel Monge", "Javier Martinez", "Mariana Gomez", "Saul Mora", "Sebastian Castillo", "Emiliano Rivera", "Alexa Villalobos", "Franco Saenz", "Angelica Catacora", "Sven Wengler", "Lian Solano"];
  

  if (username === "" || password === "") {
    Swal.fire("Error", "Por favor completa todos los campos", "error");
    return;
  }
  if (password !== "OPERIS2026") {
    Swal.fire("Error", "Contraseña incorrecta", "error");
    return;
  }

  let usuarioEncontrado = empleados.some(empleado => empleado.toLowerCase() === username.toLowerCase());

  if (usuarioEncontrado) {
    Swal.fire("Éxito", "¡Inicio de sesión exitoso! Bienvenido " + username, "success").then(() => {
      location.href = '.html';
    });
  } else {
    Swal.fire("Error", "Usuario no encontrado en la base de datos", "error");
  }
}
