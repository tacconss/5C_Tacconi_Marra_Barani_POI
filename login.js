const createLogin = () =>{
    /*const inputName = document.querySelector("#name");
    const inputPassword = document.querySelector("#password");
    const loginButton = document.querySelector("#login");
    const divPrivate = document.querySelector("#private");
    const divLogin = document.querySelector("#login");
    */
  
    divPrivate.classList.remove(".visible");
    divPrivate.classList.add(".hidden");
    isLogged = sessionStorage.getItem("Logged") || false;
  
      const registra = (username, password) => {
        return new Promise((resolve, reject) => {
            fetch("https://ws.cipiaceinfo.it/credential/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "key": myToken
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(r => r.json())
            .then(r => {
                resolve(r.result); 
            })
            .catch(reject);
        });
    };
  
    registerButton.onclick = () => {
      console.log("cliccato")
      const username = inputName.value.trim();
      const password = inputPassword.value.trim();
  
      if (!username|| !password) {
          console.error("Inserisci username e password.");
          return;
      }
  
      registra(username, password).then((result) => {
          console.log("Registrazione completata:", result);
          if (result) {
              console.log("Effettua il login con le nuove credenziali.");
              //alert("Registrazione avvenuta con successo! Effettua il login.");
          } else {
              console.error("Errore durante la registrazione.");
          }
      }).catch((error) => {
          console.error("Errore durante la registrazione:", error);
      });
    };
  
      // Nascondi la mappa e la tabella inizialmente
      form.classList.add("hidden");
  
      const login = (username, password) => {
        return new Promise((resolve, reject) => {
          fetch("http://ws.cipiaceinfo.it/credential/login", { 
            method: "POST",
            headers: {
               "content-type": "application/json",
               "key": myToken 
            },
            body: JSON.stringify({
               username: username,
               password: password
            })
          })
          .then(r => r.json())
          .then(r => {
               resolve(r.result); 
            })
          .catch(reject);
        })
      }
  
      loginButton.onclick = () => {
        const username = inputName.value;
        const password = inputPassword.value;
  
        if (!username || !password) {
            console.error("Inserisci username e password.");
            return;
        }
  
        login(username, password).then((result) => {
            console.log("Login risultato:", result);
            if (result) {
                isLogged = true;
                divLogin.classList.add("hidden");
                form.classList.remove("hidden");
                //form.classList.add("visible");
            } else {
                console.error("Login fallito.");
            }
        }).catch((error) => {
          console.error("Errore durante la registrazione:", error);
      });
    
      };
  }
  createLogin();