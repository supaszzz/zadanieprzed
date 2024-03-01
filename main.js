const btnGeneruj = document.getElementById("btnGeneruj");
const podaneH = document.getElementById("podaneH");
const komorki = document.querySelectorAll("table td");

function btnKlik() {
    komorki[0].style.backgroundColor = `hsl(${podaneH.value}, 100%, 50%)`;
    komorki[1].style.backgroundColor = `hsl(${podaneH.value}, 80%, 50%)`;
    komorki[2].style.backgroundColor = `hsl(${podaneH.value}, 60%, 50%)`;
    komorki[3].style.backgroundColor = `hsl(${podaneH.value}, 40%, 50%)`;
    komorki[4].style.backgroundColor = `hsl(${podaneH.value}, 20%, 50%)`;
}

btnGeneruj.addEventListener("click", btnKlik);