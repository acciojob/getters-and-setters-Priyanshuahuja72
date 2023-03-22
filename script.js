//complete this code
class Person {
	constructor(name , age)
	{
		this.name = name;
		this.age = age;
	}
	get getName()
	{
		this.name = name;
	}
	get setage(age)
	{
		this.age = age;
	}
}

class Student extends Person {
	constructor(a , age)
	{
		super(a , age);
		this.age = age;
	}
	study()
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
	teach()
	{
		console.log(this.a + "is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
