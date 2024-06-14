const pie = 3.14
class Circle{
    radius = 1.0
    color = "red"
    getRadius(){
        console.log(this.radius)
    }
    setRadius(r=1.0){
        this.radius = r
    }
    getColor(){
        console.log(this.color)
    }
    setColor(c="red"){
        this.color = c
    }
    toString(){
        console.log(`Radius: ${this.radius} Color: ${this.color}`)
    }
    getArea(){
        console.log(pie*Math.pow(this.radius,2))
    }
    getCircumference(){
        console.log(2*pie*this.radius)
    }
    
}
