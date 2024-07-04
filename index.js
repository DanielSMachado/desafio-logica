let xp = 8000
let heroi = "Homen de ferro"

switch(true){
    case (xp <= 1000):
        console.log("O Herói de nome: " + heroi +" está no nível Ferro")
        break;
    case (xp < 2000):
        console.log("O Herói de nome: " + heroi +" está no nível Bronze")
        break;
    case xp < 5000:
        console.log("O Herói de nome: " + heroi +" está no nível Prata")
        break;
    case xp < 7000:
        console.log("O Herói de nome: " + heroi +" está no nível Ouro")
        break;
    case xp < 8000:
        console.log("O Herói de nome: " + heroi +" está no nível Platina")
        break;
    case xp < 9000:
        console.log("O Herói de nome: " + heroi +" está no nível Ascendente")
        break;
    case xp < 10000:
        console.log("O Herói de nome: " + heroi +" está no nível Imortal")
        break;
    default:
        console.log("O Herói de nome: " + heroi +" está no nível Radiante")
        break;
}