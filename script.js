//your JS code here. If required.
let student={
	name: "raghav",
}
let fn = getKeys(){
	return(Object.keys(this));
}
Object.prototype.getKeys = fn;
console.log(student.getKeys());