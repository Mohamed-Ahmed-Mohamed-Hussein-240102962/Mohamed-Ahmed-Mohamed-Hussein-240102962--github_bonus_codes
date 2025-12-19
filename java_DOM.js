var obj1=document.getElementById("div1")
console.log(obj1)

var obj2=document.getElementsByClassName("span1")[0] 
console.log(obj2)

var obj3=document.getElementsByTagName("p")
console.log(obj3)

var obj4=document.querySelector("#p1")

console.log(obj4)

obj4.innerHTML="<q> hi U</q>"
console.log(obj4)

var obj5 =document.getElementsByTagName("input")[0]
obj5.setAttribute("placeholder","name")
obj5.setAttribute("value","elhraa")
console.log(obj5)




var element_1=document.createElement("h1")
var text=document.createTextNode("text")


element_1.appendChild(text)

let body=document.body  
body.append(element_1)
