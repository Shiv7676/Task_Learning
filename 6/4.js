class UberPrice{
    constructor(distance, costperkm, waitingTime){
        this.distance = distance
        this.costperkm = costperkm
        this.waitingTime = waitingTime
    }
    getCost(){
        return this.distance*this.costperkm + this.waitingTime*3
    }
}

let obj = new UberPrice(5,22,6)
let cost = obj.getCost()

console.log("Rs. "+cost)