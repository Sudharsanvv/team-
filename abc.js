const aug=['1','2','3','4','5'];
console.log(aug.slice(1,4));  

var a=10;
var b=10;
console.log(a+b);

console.log(aug.pop());

console.log(aug);

aug.push('6');
console.log(aug);

const person = new Object();
person.name='Sudhan';
console.log(person.name); 

function sum(x,y,z,r){
    return x*y*z*r;
}

const sm=[1,2,3,8];

console.log(sum(...sm));

class dead
{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }
}

let jet=new dead("Kanna",34);
console.log(jet.name+" "+jet.id);