const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let position = 300
let isJumping = false;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump()
        } 
    }
}

function jump() {
    
    isJumping = true
    
    let upInterval = setInterval(() => {
        if(position <= 180){
            clearInterval(upInterval)

            //descendo
            let downInterval = setInterval(() =>{
                if(position >= 290 ){
                    clearInterval(downInterval)
                    isJumping = false
                }
                position += 9  
                dino.style.top = position + "px"
            }, 25)
        } else {
            //subindo
            position -= 12 

            dino.style.top = position + "px";   
        }

 
    }, 25)  
}


function createCactus() {
    const cactus = document.createElement('div')

    let cactusPosition = 1500
    let randomTime = Math.random() * 3000

    cactus.classList.add('cactus')
    cactus.style.left = 1500 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        cactusPosition -= 8  
        cactus.style.left = cactusPosition + 'px'

        if(cactusPosition < -60){
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } 
        
        if(cactusPosition > 0 && cactusPosition < 60 && position > 240){
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class = "game-over">Fim de Jogo<br> aperte F5 para reiniciar o jogo</h1>';
        }
    }, 20)

    if(randomTime < 200){
        randomTime = 150 
    } else if(randomTime < 800 ){
        randomTime = 800 
    }
    setTimeout(createCactus, randomTime)
}


   // document.querySelector(".dino").style.background="url('dino0.png')";


createCactus()
document.addEventListener('keyup', handleKeyUp)
