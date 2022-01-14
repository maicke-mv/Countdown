import Countdown from "./count.js";

const nextYear = new Date().getFullYear() + 1;
const tempoParaAnoNovo = new Countdown(`1 January ${nextYear} 00:00:00 GMT-0300`);
const tempos = document.querySelectorAll('#num');

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaAnoNovo.total[index];
})
}

mostrarTempo();
setInterval(mostrarTempo, 1000);

const proxAno = document.querySelector('#proxAno');
proxAno.innerHTML = nextYear;

