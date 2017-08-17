module.exports = class Person {
	constructor(name , age){
		this.name = name ;
		this.age = age   ;
	}
	basicintroduce(){
		return "My name is " + this.name + ". I am " + this.age + " years old.";
	}
	introduce(){
		return this.basicintroduce();
	}	
};
