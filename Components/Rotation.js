//Rotación del terreno
AFRAME.registerComponent("terrain-rotation", {
    schema:{
        velocidadDeRotacion: {type: "number", default: 0},
    }, 
    init: function(){
        window.addEventListener("keydown", (e) =>{
            if(e.key === "ArrowRight"){
                if(this.data.velocidadDeRotacion < 0.1){
                    this.data.velocidadDeRotacion+=0.01
                }
            }
            if(e.key === "ArrowLeft"){
                if(this.data.velocidadDeRotacion > -0.1){
                    this.data.velocidadDeRotacion-=0.01
                }
            }
            
        })
    },
    tick: function(){
        var rotationDeMapa = this.el.getAttribute("rotation")
        rotationDeMapa.y+= this.data.velocidadDeRotacion

        this.el.setAttribute("rotation", {
            x: rotationDeMapa.x, 
            y : rotationDeMapa.y, 
            z : rotationDeMapa.z})
    }
})

//Rotacion del avion

AFRAME.registerComponent('plane_rotation',{
    schema:{
        velocidadDeRotacion: {type:'number', defaul: 0},
        velocidadHorizontal: {type:'number', defaul: 0},
    }, init: function(){
        window.addEventListener('keydown', (e)=>{
            this.data.velocidadDeRotacion = this.el.getAttribute('rotation')
            this.data.velocidadHorizontal = this.el.getAttribute('position')

            var plane_rotation = this.data.velocidadDeRotacion
            var plane_position = this.data.velocidadHorizontal

            if(e.key === "ArrowRight"){
                if(plane_rotation.x < 10){
                    plane_rotation.x+=0.5
                    this.el.setAttribute('rotation', plane_rotation)
                }
            }
            if(e.key === "ArrowLeft"){
                if(plane_rotation.x > -10){
                    plane_rotation.x-=0.5
                    this.el.setAttribute('rotation', plane_rotation)
                }
            }
            if(e.key === "ArrowUp"){
                if(plane_rotation.z < 20){
                    plane_rotation.z+=0.5
                    this.el.setAttribute('rotation', plane_rotation)
                }
                if(plane_position.y < 2){
                    plane_position.y+=0.01
                    this.el.setAttribute('position', plane_position)
                }
            }
            if(e.key === "ArrowDown"){
                if(plane_rotation.z > -20){
                    plane_rotation.z-=0.5
                    this.el.setAttribute('rotation', plane_rotation)
                }
                if(plane_position.y > -2){
                    plane_position.y-=0.01
                    this.el.setAttribute('position', plane_position)
                }
            }
            
        })
    },
    tick: function(){
        var rotationDeMapa = this.el.getAttribute("rotation")
        rotationDeMapa.y+= this.data.velocidadDeRotacion

        this.el.setAttribute("rotation", {
            x: rotationDeMapa.x, 
            y : rotationDeMapa.y, 
            z : rotationDeMapa.z})
    }
})