const Person = require('./person');

module.exports = class Student extends Person {
	constructor(name , age , Class){
		super(name , age);
		this.clazz =  Class ;
	}
	introduce(){
		if(this.clazz.Leader === 'Tom' ){
			return super.introduce() + " I am a Student. I am Leader of Class " + this.clazz.number + ".";
		}
		return super.introduce() + ' I am a Student. I am at Class ' + this.clazz.number  + '.' ;
	}
};
