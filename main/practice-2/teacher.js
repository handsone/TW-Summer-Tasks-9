const Person = require('./person');

module.exports = class Teacher extends Person {
	constructor(name, age, clazz){
		super(name,age);
		this.clazzes = clazz ;
	}	
	introduce(){
		let classes = [];
		for ( let A of this.clazzes  ){
			classes.push(A.number);
		}
		if (this.clazzes.length === 0 ){
			return super.introduce() + ' I am a Teacher. I teach No Class.' ;
		}
		return super.introduce() + ' I am a Teacher. I teach Class ' + classes.join(',') + '.'; 
	}
};
