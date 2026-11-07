/*
  Proyecto: proyprueba (línea base) - Laboratorio 11
  Archivo:  script.js
  Rama:     feature/validacion-login
  Responsable: Espinoza Llacma, Karim Andre (Rioja)

  Proyecto didáctico: la validación del lado cliente NO es seguridad real.
  Credenciales de demostración:
    correo:     demo@correo.com
    contraseña: demo12345
*/

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Mostrar / ocultar contraseña
toggleBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Ocultar";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Mostrar";
  }
});

// Envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (email === "" || password === "") {
    message.textContent = "Completa todos los campos.";
    message.style.color = "red";
    return;
  }

  if (email === "demo@correo.com" && password === "demo12345") {
    message.textContent = "Inicio de sesión de demostración correcto.";
    message.style.color = "green";
  } else {
    message.textContent = "Correo o contraseña incorrectos.";
    message.style.color = "red";
  }
});
