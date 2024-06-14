let obj1 = {
    name : "Person 1",
    age : 5
}

let obj2 = {
    age : 5,
    name : "Person 1"
}

json1 = JSON.stringify(obj1)
json2 = JSON.stringify(obj2)
temp1 = 0
temp2 = 0
if(json1.name == json2.name){
    temp1 = 1
}
if(json1.age == json2.age){
    temp2 = 1
}

if(temp1 ==1 && temp2 == 1){
    console.log("Both JSON are equal")
}

else{
    console.log("JSON are not equal")
}