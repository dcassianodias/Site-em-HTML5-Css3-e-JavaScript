/* Tela inicial */

var nome = window.prompt("Digite o seu nome: ", "");
    window.alert (`Seja bem vindo ${nome}!`); 

   
 var data = new Date();
        
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    
    if (dia < 10)
        dia = "0" + dia;
    
    if (mes < 10)
        mes = "0" + mes;
    
    if (hora < 10)
        hora = "0" + hora;
    
    if (min < 10)
        min = "0" + min;
    
    if (seg < 10)
        seg = "0" + seg;    
    
window.alert(`Hoje é ${dia}/${mes}/${ano} e no momento são ${hora}:${min}:${seg}`);

   