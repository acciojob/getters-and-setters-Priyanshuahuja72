//complete this code
class Person {
	constructor(name , age)
	{
		this._name = name;
		this._age = age;
	}
	get getName()
	{
		return this._name;
	}
	set setage(age)
	{
		this._age = age;
	}
}

class Student extends Person {
	constructor(a , age)
	{
		super.getName(this.a);
		super.setage(this.age) = age;
	}
	get study()
	{
		console.log(this.a + "is studying");
	}
}

class Teacher extends Person {
	constructor(a , b)
	{
		super(a , age);
		this.age = age;
	}
	get teach()
	{
		console.log(this.a + "is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
