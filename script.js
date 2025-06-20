const botao = document.querySelector("#btt"); 
const body = document.querySelector("body");
let msg = document.querySelector("#mensagem");
let v = 0; 
msg.style.display = "none";
msg.innerHTML="Olá, mundo!";

botao.addEventListener("click", mensagem);


function mensagem() {
    if ( v == 0 ) {
    msg.style.display = "block";
    msg.scrollIntoView({ behavior: "smooth" });
    botao.innerHTML="Clique para esconder a mensagem!";
    v = 1; 
    } else {
        msg.style.display = "none";
        v = 0;
         botao.innerHTML="Clique para ver a mensagem!";
    }
}
