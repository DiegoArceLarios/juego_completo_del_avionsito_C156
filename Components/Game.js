AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type: 'string', default: ''}
    },
    init: function(){
        var duration = 10
        var timerEl = document.querySelector("#timer")
        this.startTimer(duration, timerEl)
    },
    startTimer: function(duration, timerEl){
        var minutos;
        var segundos;
        setInterval(()=>{
            if(duration >= 0){
                minutos = parseInt(duration / 60);
                segundos = parseInt(duration % 60);
                if(minutos < 10){
                    minutos = "0" + minutos
                }
                if(segundos < 10){
                    segundos = "0" + segundos
                }
                timerEl.setAttribute("text", {value: minutos + ":" + segundos})
                duration-=1
            }else{
                this.gameOver();
            }
        },1000)
        
    },
    
    update: function(){
        this.isCollided(this.data.elementId)
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide", (e) =>{

            if (elementId.includes("#ring")){
                this.updateTargets();
                this.updateScore();
                element.setAttribute("visible", false)
            }else{
                this.gameOver()
            }
                
        })

    },updateTargets: function () {
        var element = document.querySelector("#targets");
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", {
          value: currentTargets,
        });
      },updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
        value: currentScore,
        });
    },gameOver: function(){
        var planeEl = document.querySelector("#avionModelo")
        var element = document.querySelector("#endgame_text")
        element.setAttribute('visible', true)
        planeEl.setAttribute('dynamic-body',{
            mass: 1
        })
    }


})