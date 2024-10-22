let nome = "Rogerio3000"
let xpJogador = 20456
let nivel = ""

if(xpJogador <=1000){
    nivel = "Ferro";

}else if (xpJogador =1001 && xpJogador <=2000){
    nivel = "Bronze";

}else if (xpJogador =2001 && xpJogador <=5000){
    nivel = "Prata";

}else if (xpJogador =5001 && xpJogador <=7000){
    nivel = "Ouro";

}else if (xpJogador =7001 && xpJogador <=8000){
    nivel = "Platina";

}else if (xpJogador =8001 && xpJogador <=9000){
    nivel = "Ascendente";

}else if (xpJogador =9001 && xpJogador <=10000){
    nivel = "Imortal";

}else {
    nivel = "Radiante";

}

console.log("O Heroi de nome: " + nome, "esta no nivel: " + nivel)