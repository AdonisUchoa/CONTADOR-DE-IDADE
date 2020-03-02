function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (null){

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','muleke.png')
            }else if ( idade <21){
                //adolescente
                img.setAttribute('src', 'jovemH.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','homem.png')
            }else {
                //velho
                img.setAttribute('src','idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','menina.png')
            }else if ( idade <21){
                //adolescente
                img.setAttribute('src','joveM.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','mulher.png')
            }else  {
                //velho
                img.setAttribute('src','idosa.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild (img)
    }

}