const hamburger = document.querySelector(".hamburger");
const lista = document.getElementById("listbottom");
const principal = document.getElementById("principal");
const btn = document.getElementById("btn-menu");



hamburger.addEventListener("click", () => {
    lista.classList.toggle("active");
    principal.classList.toggle("active2");
})


btn.addEventListener("click", () => {
    lista.classList.toggle("active");
    principal.classList.toggle("active2");
})




document.getElementById("preco_form").onclick=function(event){
    const preco = document.getElementById("preco").value;
    let matricula = document.getElementById("matricula").value;
    let quilometragem = document.getElementById("quilometragem").value;
    let precofinal;


    matricula=2022-matricula;
    if(matricula>10){
        matricula=(10*0.05) + (matricula-10)*0.04;
    } else {
        matricula=matricula*0.05;
    }

    if(quilometragem<30000){
       quilometragem=1; 
    } else
    if(quilometragem>30000 && quilometragem<=70000) {
        quilometragem=0.95; 

    }else{
        quilometragem=0.9;
    }

    precofinal=(preco*quilometragem)*(1-matricula);

    document.getElementById("preco_final").value=precofinal.toFixed(0);  


    let preco_mauestado;
    let preco_bomestado;
    let preco_muitobomestado;
    let euroSymbol = '\u20AC'; 
    preco_mauestado=precofinal*0.6;
    preco_bomestado=precofinal*1;
    preco_muitobomestado=precofinal*1.1;
    document.getElementById("preco_mauestado").textContent=preco_mauestado.toFixed(0) + euroSymbol;
    document.getElementById("preco_bomestado").textContent=preco_bomestado.toFixed(0) + euroSymbol;
    document.getElementById("preco_muitobomestado").textContent=preco_muitobomestado.toFixed(0) + euroSymbol;
    document.getElementById("div_maior").classList.toggle("estados");

    }


    
