var myarry=[100,200,300,"Mohamed Ahmed ","Cyber Security",900,800]
console.log(myarry[2])

myarry[4]="Network Security"
console.log(myarry)

console.log(myarry.length)

myarry.pop()

myarry.push("medo")

myarry.splice(3,2) //delete index 3 and the rest of the array or and one after 1

// can also replace with specific item
myarry.splice(3,1,"HI U")

myarry.shift()

myarry.unshift("omar")

console.log(myarry.indexOf(900)) //return index of the firest item that match

console.log(myarry.lastIndexOf(900)) //last mat

//slice take slice of array and be another array

var mynewarry=[100,200,300,1000,888,900,800]

var Y =mynewarry.slice(2,5)

console.log(Y)


var arr=[1,2,4]
var arr2=[1,5,7]
var newarray=arr.concat(arr2)
console.log(newarray)

var str=["welcome","sara","and","ali"]

var str1=str.join(" ")
console.log(str1)


var arry=["graps","banana","apple"]

arry.sort()
console.log(arry)

var num=[5,6,8,2]
num.sort((a,b) =>a-b)
console.log(num)


var num=[5,6,8,2]
num.sort(function(a,b) {a-b})
console.log(num)


var num=[5,6,8,2]
num.sort((a,b) =>b-a)
console.log(num)


for(let i=0;i<num.length;i++){
    console.log(num[i])
}

num.forEach(function(number){
    console.log(number+1)
})

for(var x of num){
    console.log(x)
}
