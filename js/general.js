let data = new Date();

function loadPage(){
    let anoRef = 2002;
    let anoAtual = new Date().getFullYear();
    let mesAtual = data.getMonth();
    let diaAtual = data.getDate();
    let idade = 0;

    if((mesAtual >= 10)&&(diaAtual >= 29)){
        idade = anoAtual - anoRef;
    }else{
        idade = (anoAtual - anoRef) - 1;
    }
    document.getElementById('idade').innerHTML = idade;





    document.getElementById('contact').innerHTML="";
}