const Person = require('./person');

module.exports = class Teacher extends Person {
	constructor(name, age, clazz){
		super(name,age);
		this.clazzes = clazz ;
	}	
	introduce(){
		if (this.clazzes.length === 0 ){
			return super.introduce() + ' I am a Teacher. I teach No Class.' ;
		}
		return super.introduce() + ' I am a Teacher. I teach Class ' + this.clazzes[0].number + ',' + this.clazzes[1].number + '.' ;
	}
};
