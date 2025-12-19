let person={
    name:"mohamed",
    age:19,
    greet:function(){
        console.log("hello "+this.name)
    }
}
person.greet()

console.log(person.name)
person.age=20;
console.log(person.age)

person.major="CS"
console.log(person)

delete person.age
console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))

console.log(Object.entries(person))

let person_empty={}

Object.assign(person_empty,person,{age:30})
console.log(person_empty)

for (var i in person){
    console.log(i+" "+person[i]);
}

function Person(name,major){
    this.name=name
    this.major=major
}


let p1=new Person("sarhan","Art")
console.log(p1)
let p2=new Person("mahmod","cyber")
console.log(p1)

// let a =[]
let a =new Array(1,2,3)
console.log(Array.prototype)

function Animal(name){
    this.name=name
}

Animal.prototype.sound=function(){
    console.log(this.name+" make sound")
}
console.log(Animal.prototype)

function Dog(dogname){
    Animal.call(this,dogname)
}

Dog.prototype=Object.create(Animal.prototype)

let D =new Dog("dog")
D.sound()
class Animal2{
    constructor(name){
        this.name=name
    }
    sound(){
        console.log(this.name+" Make sound ")
    }
}

class Dog2 extends Animal2{
    constructor(name,breed){
        super(name)
        this.breed=breed
     }
}

let d2=new Dog2("big dog","dog breed")
d2.sound()
console.log(d2)

let a2=new Animal2("cat")
a2.sound()

let str =JSON.stringify(person)
console.log(str)

let obj2=JSON.parse(str) //pasres as JS object

console.log(obj2)

