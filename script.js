//complete this code
class Person {
	constructor(name , age)
	{
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	constructor(a , b)
	{
		super(a , b);
	}
	study()
	{
		console.log(this.a + "is studying");
	}
}

class Teacher extends Person {
	constructor(a , b)
	{
		super(a , b);
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
