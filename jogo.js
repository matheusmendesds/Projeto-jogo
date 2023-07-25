var mUm = new Object () ;
mUm.nome = "Dragão" ;
mUm.forca = 67 ;
mUm.velo = 55 ;
mUm.inte = 43 ;


let qtdM = 2
let n = document.getElementById("nome")
let f = document.getElementById("forPer")
let v = document.getElementById("velPer")
let int = document.getElementById("intPer")



function jogar() {
    let a = document.getElementById("Arena")
    let pontMon = 0
    let pontPer = 0
    a.innerHTML = `${nome.value} x ` + mUm.nome
    if (mUm.forca < f.value) {
        a.innerHTML += `<p> Voce é mais forte que o Monstro!</p>`
        pontPer = pontPer + 1
    } else {
        a.innerHTML += `<p>Voce é mais fraco que o monstro :( </p>`
        pontMon = pontMon + 1
    } 
        if (mUm.velo < v.value) {
            a.innerHTML += `<p> Voce é mais veloz que o Monstro!</p>`
            pontPer = pontPer + 1
        } else {
            a.innerHTML += `<p>Voce é mais lento que o monstro :( </p>`
            pontMon = pontMon + 1
        } 
            if (mUm.inte < v.value) {
                a.innerHTML += `<p> Você é mais inteligente que o Monstro!</p>`
                pontPer = pontPer + 1
            } else {
                a.innerHTML += `<p> O monstro é mais inteligente que você :( </p>`
                pontMon = pontMon + 1
            } 
            do {
                if (pontPer > pontMon) {
                    qtdM == qtdM - 1
                    a.innerHTML += "Você venceu a luta!"
                    document.getElementById("segfase").style.display="flex"
                } else {
                    a.innerHTML += "Você perdeu a luta, tente novamente!"
                        
                }
            } while (qtdM == 0)
    
}

function limpar() {
    let a = document.getElementById("Arena")
    pontMon = 0
    pontPer = 0
    a.innerHTML = `<p>Monstros já estão te aguardando...</p>`
    
}

function novaFase() {
    document.getElementById("segFase").style.display="flex"
}

