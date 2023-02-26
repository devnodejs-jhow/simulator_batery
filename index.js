let qtd_power = 0;
let index = 1;
let limits = [14,28,42,56,70,84,100]
const batery_icon = document.querySelectorAll('.body-main :nth-child(n)')
console.log(batery_icon);
setInterval(()=>{
    if(qtd_power <= 100){
        qtd_power++
        console.log(qtd_power);
    }else{
           batery_icon.forEach(item=>{
                item.style.display = 'none'
           })
           qtd_power = 0;
    }
    switch (qtd_power <= 100) {
        case qtd_power == 14:
            index = 1
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        case qtd_power == 28:
            index = 2
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        case qtd_power == 42:
            index = 3
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        case qtd_power == 56:
            index = 4
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        case qtd_power == 70:
            index = 5
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        case qtd_power == 84:
            index = 6
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        case qtd_power == 100:
            index = 7
            if(document.querySelector(`.carga-${index}`).style.display = "none"){
                document.querySelector(`.carga-${index}`).style.display = "block"
            }
            break;
        default:
            console.log('Ainda não carregou');
            break;
    }
    

},50)



