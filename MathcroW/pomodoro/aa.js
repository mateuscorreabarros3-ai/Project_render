let tempo = null;
let tempoInicial = null;
let minuto = null;
let segundo = null;
let cronometro = null;
let contagem = 0;
let selecao = false;
let intervalo = false;
let tipo = null;

const vinte = {
    cincoMinutos: 300,
    vinteMinutos: 1200,
    vinteCincoMinutos: 1500
};

const cinquenta = {
    dezMinutos: 600,
    cinquentaMinutos: 3000,
    quarentaMinutos: 2400
}

function trocaOpcPomodoro(){
    let opcao = document.getElementById('pomodoroOpc').value;//onde vai exibir o timer
    tipo = opcao;
    let sim = confirm('Ao clicar em "OK" você iniciará o estudo com o método pomodoro. Gostaria de iniciar?');
    if(sim){
        if(!selecao){
            if(opcao === '25'){
                valor(tipo);
            }else if(opcao === '50'){
                valor(tipo);
            }
            selecao = true;
        }else{
            alert('Você já seleconou um método pomodoro!');
        }
    }
}

function valor(qual){
    if(intervalo){
        contagem++
        if(contagem % 4 === 0){
            qual === '25' ? tempo = vinte.vinteMinutos : tempo = cinquenta.quarentaMinutos;
        }else{
            qual === '25' ? tempo = vinte.cincoMinutos : tempo = cinquenta.dezMinutos;
        }
        
        intervalo = false;
    }else{
        qual === '25' ? tempo = vinte.vinteCincoMinutos : tempo = cinquenta.cinquentaMinutos;
        intervalo = true;
    }   
    timer();
}

function timer(){
    tempoInicial = tempo;
    minuto = Math.floor(tempo / 60);
    segundo = tempo % 60;
    let exibir = document.getElementById('tempo');
    exibir.textContent = String(minuto).padStart(2, '0') + ':' + String(segundo).padStart(2, '0');

    let barra = document.getElementById('barra');
    barra.style.backgroundColor = '#34d613';
    barra.style.width = (tempo / tempoInicial) * 100 + '%';

    cronometro = setInterval(() => {
        tempo--;

        minuto = Math.floor(tempo / 60);
        segundo = tempo % 60;

        exibir.textContent = String(minuto).padStart(2, '0') + ':' + String(segundo).padStart(2, '0');
        
        barra.style.width = (tempo / tempoInicial) * 100 + '%';

        if(tempo < 0 && intervalo === true){
            clearInterval(cronometro);
            alert('Descanso!');
            valor(tipo);
        }else if(tempo < 0 && intervalo === false){
            clearInterval(cronometro);
            alert('Volte!');
            valor(tipo);
        }

        if(tempo == Math.floor(tempoInicial / 2)){
            barra.style.backgroundColor = '#ebdd20';
        }else if(tempo == Math.floor(tempoInicial / 5)){
            barra.style.backgroundColor = '#d61313';
        }

    }, 1000);
}

function pararPomodoro(){
    clearInterval(cronometro);
    selecao = false;
    intervalo = false;
}