let nome = "Markola Capudo"
let xp = 10005
let rank = ""

if(xp<1000) {
    rank = "Ferro"
}

else if(xp>=1000 && xp<2000) {
    rank = "Bronze"
}

else if(xp>=2000 && xp<3000) {
    rank = "Prata"
}

else if(xp>=3000 && xp<4000) {
    rank = "Ouro"
}

else if(xp>=5000 && xp<6000) {
    rank = "Diamante"
}

else if(xp>=6000 && xp<7000) {
    rank = "Platina"
}

else if(xp>=7000 && xp<8000) {
    rank = "Ascendente"
}

else if(xp>=9000 && xp<10000) {
    rank = "Imortal"
}

else if(xp>10000) {
    rank = "Radiante"
}

console.log("O herói " + nome + " está no rank " + rank)