AFRAME.registerComponent('flying-birds', {
    schema:{

    },init: function(){
        for(var i = 1; i<=20; i++){
            var id = `hurdle${i}`

            var px = Math.floor(Math.random()*3000 + (-1000))
            var py = Math.floor(Math.random()*2 + (-1))
            var pz = Math.floor(Math.random()*3000 + (-1000))
            var position = {x: px, y : py, z : pz}

            this.pajaritos(id, position)
        }
    },pajaritos: function (id, position){
        //crear a los pajaros
        var terrainEl = document.querySelector("#terrenoModelo")

        var birdEl = document.createElement('a-entity')
        birdEl.setAttribute('id', id)
        birdEl.setAttribute('position', position)  
        birdEl.setAttribute('scale', {x: 500, y: 500, z: 500})      
        birdEl.setAttribute('gltf-model', './assets/models/flying_bird/scene.gltf')
        birdEl.setAttribute('animation-mixer', {})

        //Estableder el cuerpo estatico del sistema fisico
        birdEl.setAttribute('static-body', {
            shape: 'sphere',
            sphereRadius: 5
        })
        birdEl.setAttribute("game-play",{
            elementId: `#${id}`
        })

        terrainEl.appendChild(birdEl)
    }
})