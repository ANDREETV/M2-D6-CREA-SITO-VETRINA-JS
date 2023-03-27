function saluto() {
    document.getElementById('testo').innerText ="ciao"
    document.getElementById("#login").classList.replace("login")
}


function sfondoPagina() {
    // document.getElementById('sfondo').style.backgroundColor = "green"
    if (    document.querySelector("body").classList.contains("sfondo")){
     document.querySelector("body").classList.remove("sfondo")  
    } else 
    document.querySelector("body").classList.add("sfondo")  
}


function indirizzo() {
    let intestazione = "Indirizzo salvato :  "
    let inputValore = document.querySelector('input').value;
    let indirizzoCompleto =  intestazione + inputValore;
    console.log(indirizzoCompleto);
    if (document.contains(document.getElementById("testo-indirizzo"))) {
        document.getElementById("testo-indirizzo").remove()
    }   
    let idIndirizzo = document.getElementById("input-indirizzo")
    let idTesto = document.createElement('div')
    idTesto.innerHTML = indirizzoCompleto;
    idTesto.setAttribute("id", "testo-indirizzo")
    idIndirizzo.appendChild(idTesto)
}

function bottone() {
    let imgBottone = document.querySelectorAll('.main-img')
for (let i = 0; i < imgBottone.length; i++) {
    imgBottone[i].classList.toggle('bottone')
}
}


function colorePrezzo() {
    let rosso = Math.round(Math.random() * 255);
    let verde = Math.round(Math.random() * 255);
    let blu = Math.round(Math.random() * 255);
    return 'rgb(' + rosso + ', ' + verde + ', ' + blu + ')'
}

function bottoneColore() {
    let coloreBottonePrezzo = document.querySelectorAll('.prezzo')
    let coloreRando = colorePrezzo()
    for (let i = 0; i < coloreBottonePrezzo.length; i++) {
        let prezzoSingolo = coloreBottonePrezzo[i]
        prezzoSingolo.style.color = coloreRando;
    }
}



