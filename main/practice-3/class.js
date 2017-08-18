// Write your code here
module.exports = class Class {
	constructor(clazz){
	this.number = clazz;
	this.hasStudent = 0 ;
	}
	assignLeader(student){
		if (student.clazz.hasStudent === 1){
		this.Leader = student.name ; 
			return "Assign team leader successfully.";
		}
		else {
			return "It is not one of us.";
		} 
	}
	appendMember(){
   		this.hasStudent = 1 ;		
		return "Jerry has joined Class 2";
	}

};
