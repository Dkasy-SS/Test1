// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};



function CreateObject(name, number){
    this.name = name;
    this.number = number;
}

let obj = new CreateObject('Oleg', 20);

CreateObject.prototype.getInfo = function(){
    return `Info of selected object is ${this.name} + ${this.number}`
}

console.log(CreateObject.prototype.__proto__)

Object.prototype.createLastName = function(lastName){
    this.lastName = lastName;
}

obj.createLastName('Metlinski')
console.log(obj)