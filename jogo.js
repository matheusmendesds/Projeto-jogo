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
    document.getElementById("Persona").style.display="none"
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
            if (mUm.inte < int.value) {
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
    document.getElementById("Persona").style.display="block"
    let a = document.getElementById("Arena")
    pontMon = 0
    pontPer = 0
    a.innerHTML = `<p>Monstros já estão te aguardando...</p>`
    
}

var mDs = new Object () ;
mDs.nome = "Mago" ;
mDs.forca = 55 ;
mDs.velo = 68 ;
mDs.inte = 74 ;

function novaFase() {
    document.getElementById("tntn").style.display="none"
    document.getElementById("jogar").style.display="none"
    let s = document.getElementById("segFase")
    s.style.display="block"
    let pontMon = 0
    let pontPer = 0
    s.innerHTML = `<h2>${nome.value} x ${mDs.nome} </h2>`
    if (mDs.forca < f.value) {
        s.innerHTML += `<p> Voce é mais forte que o Monstro!</p>`
        pontPer = pontPer + 1
    } else {
        s.innerHTML += `<p>Voce é mais fraco que o monstro :( </p>`
        pontMon = pontMon + 1
    } 
        if (mDs.velo < v.value) {
            s.innerHTML += `<p> Voce é mais veloz que o Monstro!</p>`
            pontPer = pontPer + 1
        } else {
            s.innerHTML += `<p>Voce é mais lento que o monstro :( </p>`
            pontMon = pontMon + 1
        } 
            if (mDs.inte < int.value) {
                s.innerHTML += `<p> Você é mais inteligente que o Monstro!</p>`
                pontPer = pontPer + 1
            } else {
                s.innerHTML += `<p> O monstro é mais inteligente que você :( </p>`
                pontMon = pontMon + 1
            } 
            do {
                if (pontPer > pontMon) {
                    qtdM == qtdM - 1
                    s.innerHTML += "Você venceu a luta!"
                    document.getElementById("segfase").style.display="flex"
                    
                } else {
                    a.innerHTML += "Você perdeu a luta, tente novamente!"      
                }
            } while (qtdM == 0)
            
}

