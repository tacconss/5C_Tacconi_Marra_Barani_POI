/*const myToken = "c6664b7e-16c5-4a74-931e-377b271f30b2"; 

// Elementi HTML
const inputName = document.querySelector("#name");
const inputPassword = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const divPrivate = document.querySelector("#private");
const divLogin = document.querySelector("#login");

// Nascondi area privata inizialmente
divPrivate.classList.add("hidden");

// Funzione di login
const login = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch("http://ws.cipiaceinfo.it/credential/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "key": myToken,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data.result);
      })
      .catch((error) => {
        console.error("Errore durante il login:", error);
        reject(error);
      });
  });
};

// Evento di click sul pulsante di login
loginButton.onclick = () => {
  const username = inputName.value;
  const password = inputPassword.value;

  login(username, password)
    .then((result) => {
      if (result) {
        // Login riuscito
        console.log("funziona");
        divLogin.classList.add("hidden");
        divPrivate.classList.remove("hidden");
      } else {
        // Login fallito
        console.log("login fallito");
        alert("Credenziali non valide. Riprova.");
      }
    })
    .catch(() => {
      alert("Errore di connessione. Riprova più tardi.");
    });
};
*/