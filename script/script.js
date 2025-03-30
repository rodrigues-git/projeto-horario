function carregar(){

    let agora = new Date()
    let hora = agora.getHours()

    let msg = document.getElementById('msg')

    let foto = document.getElementById('foto')

    msg.innerText = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 13){
        foto.src = 'imagens/manha.jpg'
        document.body.style.background = ' #EDDEB8'
    }

    else if (hora >=13 && hora < 18){
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = '#d49250'
    }

    else{
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = '#274A8A'
    }
}
