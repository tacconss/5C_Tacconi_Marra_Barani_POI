const opere = document.querySelectorAll(".opera"); //prende tutte le opere in automatico (14/01/2024)
//aggiunta dei pulsanti di rimozione per ogni riga
const aggiungiPulsantiRimozione=()=>{
    for(let i=0;i<opere.length;i++){
        opere[i].innerHTML+=`<button class=bottone id=bottone${i}> - </button>`;
        console.log(opere[i]);
    } 
}
const rimuoviRiga=()=>{
    const bottoni=document.querySelectorAll(".bottone");
    for(let i=0;i<bottoni.length;i++){
        bottoni[i].onclick=()=>{
            console.log("ciao");
            opere[i].remove();
        }
    }
}

/*const rimuoviRiga=()=>{
    let contEsterno=1; //permette di tenere il conto del numero del bottone
    for(let i=0;i<array1.length;i++){
        let array1= document.querySelector("")
        let bottone=document.querySelector(`#bottone${i+1}`);
        bottone.onclick=()=>{
            console.log("ciao"+(i+1));//funziona, adesso bisogna dire che viene tolta la riga
            //va presa la riga e va nascosta
            array1[i].splice(i,i);
            console.log(array1);
            
        }
        contEsterno++;
    }
}
*/
aggiungiPulsantiRimozione();
rimuoviRiga();

//``







