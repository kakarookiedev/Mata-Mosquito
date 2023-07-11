var tempo = 60
var pontos = 0
var vida = 3


var dificuldade = window.location.search
dificuldade = dificuldade.replace('?',' ')
dificuldade = parseInt(dificuldade)
console.log(dificuldade)

if (dificuldade == 2){
    tempo = 40
}
if (dificuldade == 3){
    vida = 2
    tempo = 30
}


var cronometro = setInterval(function(){

    if(document.getElementById("cronometro")){
        document.getElementById("cronometro").innerHTML = tempo
    }
    if (tempo === 0){
        clearInterval(cronometro)
    }
    tempo -= 1
    
},1000)

function criarMosca(){

    if(document.getElementById("vidas")){
        document.getElementById("vidas").innerHTML = vida
    }

    if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()
	}

    var alturaTela = window.innerHeight
    var larguraTela = window.innerWidth

    var posicaoX = Math.floor(Math.random() * larguraTela)
    var posicaoY = Math.floor(Math.random() * alturaTela)

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.style.top = posicaoY + 'px'
    mosca.style.left = posicaoX + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.className = ''

    console.log(mosca.className)

    var tamanhoMosca = Math.floor(Math.random() * 3)
    console.log(tamanhoMosca)
    console.log(dificuldade)

    switch(dificuldade){
        case 1: 

            console.log('Caso dificuldade inicial')
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
            console.log('Caso dificuldade media')
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
            console.log('Caso dificuldade maxima')
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



    
    console.log('tamanho da mosca = '+ tamanhoMosca)

    mosca.onclick = function(){
        if (dificuldade == 3){
            pontos += 13
        } else {
            pontos += 10
        }

        vida += 1
        console.log(pontos)
        document.getElementById('mosca').remove()
        document.getElementById('pontos').innerHTML = pontos

        mosca.onclick = true ? console.log('true') : console.log('falha')
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

