
function principal() {
    let adultos = Number(document.getElementById("adultos").value) ;
    let criancas = Number(document.getElementById("criancas").value) ;
    let horas = Number(document.getElementById("horas").value);
    let resultado = document.getElementById("resultado");
    
    let carne = 0;
    let cerveja = 0;
    let refri = 0;
    
    
    if (horas < 6 ){
        carne = (adultos * 400 + criancas * 200)/1000;
        cerveja = Math.ceil((adultos * 1200)/355);
        refri = Math.ceil((adultos * 1000 + criancas * 500)/2000);
    }else{
        carne = (adultos * 650 + criancas * 325)/1000;
        cerveja = Math.ceil((adultos * 2000)/355);
        refri = Math.ceil((adultos * 1500 + criancas * 750)/2000);
    }

    resultado.innerHTML = `<p> Carne= ${carne.toFixed(3)} KG </p>`;
    resultado.innerHTML += `<p> Cerveja= ${cerveja} Latas de Cerveja </p>`;
    resultado.innerHTML += `<p> Refrigerante= ${refri} Garrafas de 2LT </p>`;
};

