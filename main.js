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


    matricula=2023-matricula;
    if(matricula>10){
        matricula=(matricula-10)*0.05 + 10*0.04;
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

    document.getElementById("preco_final").value=precofinal;

    }


    
