AFRAME.registerComponent('target-ring', {
    schema:{
        
    },init: function(){
        for(var i = 1 ; i <= 20; i++){
            //id
            var id = `ring${i}`
            //variables de position
            var px = (Math.random()*3000 + (-1000))
            var py = (Math.random()*2 + (-1))
            var pz = (Math.random()*3000 + (-1000))
            var position = {x: px, y : py, z : pz}

            this.createRings(id, position)
        }
    },createRings: function(id, position){
        var terrainEl = document.querySelector('#terrenoModelo')
        var ringEL = document.createElement('a-entity')
        ringEL.setAttribute('id', id)
        ringEL.setAttribute('position', position)
        ringEL.setAttribute("material", "color", "#ff9100")
        ringEL.setAttribute("geometry", {primitive: 'torus', radius: 8})

        //Establecer el cuerpo del sistema físico
        ringEL.setAttribute('static-body',{
            shape: "sphere",
            shereRadius: 2,
        })
        ringEL.setAttribute("game-play",{
            elementId: `#${id}`
        })

        terrainEl.appendChild(ringEL)
    }
})