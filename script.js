var tempo = 60
var pontos = 0
var vida = 3


var alturaResize
var larguraResize
function responsive(){
    alturaResize = window.innerHeight
    larguraResize = window.innerWidth
}


var dificuldade = window.location.search
dificuldade = dificuldade.replace('?',' ')
dificuldade = parseInt(dificuldade)



function cronometro(){

    if(document.getElementById("cronometro")){
        document.getElementById("cronometro").innerHTML = tempo
    }
    if (tempo === 0){
        clearInterval(cronometro)
    }
    tempo -= 1
}

function criarMosca(){

    if(document.getElementById("vidas")){
        document.getElementById("vidas").innerHTML = vida
    }

    if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()
	}


    var posicaoX = Math.floor(Math.random() * larguraResize) - 100
    var posicaoY = Math.floor(Math.random() * alturaResize) - 100

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.style.top = posicaoY + 'px'
    mosca.style.left = posicaoX + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.className = ''

    modoJogo(mosca)

    mosca.onclick = function(){
        if (dificuldade == 3){
            pontos += 13
        } else {
            pontos += 10
        }

        vida += 1
        document.getElementById('mosca').remove()
        document.getElementById('pontos').innerHTML = pontos
    }

    var corpo = document.getElementById('corpo')

    corpo.onclick = function(){

        vida -=1

        if (vida < 0){
            window.location.href = "endGame.html?" + pontos
        }

        document.getElementById('vidas').innerHTML = vida
    }

    document.body.appendChild(mosca)
}

if (dificuldade == 2){
    tempo = 40
}
if (dificuldade == 3){
    vida = 2
    tempo = 30
}

function modoJogo(mosca){

    var tamanhoMosca = Math.floor(Math.random() * 3)

    switch(dificuldade){
        case 1: 
            switch(tamanhoMosca){
                case 0:
                    mosca.className = 'mosca1'
                break
                case 1:
                    mosca.className = 'mosca2'
                break
                case 2:
                    mosca.className = 'mosca1'
                break
            }
        break
        case 2:
            switch(tamanhoMosca){
                case 0:
                    mosca.className = 'mosca1'
                break
                case 1:
                    mosca.className = 'mosca2'
                break
                case 2:
                    mosca.className = 'mosca3'
                break
            }
        break
        case 3:
            switch(tamanhoMosca){
                case 0:
                    mosca.className = 'mosca1'
                break
                case 1:
                    mosca.className = 'mosca2'
                break
                case 2:
                    mosca.className = 'mosca3'
                break
            }
        break
    }
}



function fimDeJogo(){

    if (tempo == 0){

        window.location.href = "endGame.html?" + pontos
    } 

}

function status(){

    if (document.getElementById('pontuacao') && document.getElementById('status')){
        var pontuacao = window.location.search
        pontuacao = pontuacao.replace('?', ' ')
        pontuacao = parseInt(pontuacao)
        document.getElementById('pontuacao').innerHTML = pontuacao
        if (pontuacao >= 300){
            document.getElementById('status').innerHTML = 'Venceu!'
        } else {
            document.getElementById('status').innerHTML = 'Perdeu!'
        }

    }

}

