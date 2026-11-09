Title: Different Access Modifiers in TypeScript

In programming we face different scenario for instance, different parameter can do different task. In this article I will discuss this.

Programming means solving problems whether it is real life or mathemetical problem. Imagine a scenario where different where a system is running by adminstration and user can only see the worker of that system's employee's name, designation but they must not see their salary or internal matter. So this must be protected from outsider. Also their another example the employee can see his user password only by him. So for different scenario we must use different variable and their accesibility. That is how Access Modifiers come into the businness. 
Let's see some of the example of different modifier.

Public: Everyone can access and see this variable. No restriction is there.

code example:
 class Student {
    public name: string

    constructor(name: string) {
        this.name = name;
    }
 }
 const student= new Student("Sajib");
 console.log(student.name) 
 In this way anyone can see / read this.



 Protected:
 Think about a scenario where normal user can't see the variable but the corresponding people only can see this then we use Protected.

 Code: 

 class Student {
    public name: string
    protected id: number;

    constructor(name: string) {
        this.name = name;
        this.id
    }
 }
 const student= new Student("Sajib");
 console.log(student.name) 

 class CSE extends Student{
    public department: string;
    constructor(name: string, id: number){
        super(name,id);
        this.department="CSE";
    }

    public getStudent(): string {
return `Name: ${this.name}, ID: ${this.id}, Dept: ${this.department}`;

 }

 the given code can not use in any other code of protected values. Though it can inherit by subclass but only in certain condition by subclass.


 Private: In can be accessible by only in the class it was declared. It is like personal password no one can see this.


 Code: class Student {
    public name: string;
    private password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
 }

 even if we try to use this by extend it is not possible;
 class CSE extends Student {
    constructor(name: string, password: string) {
        super(name, password);
    }

    public getPassword(): string {
        // Error: Cannot access private property
        return this.password;
    }
}
It will show errors. CAUSE  we can not use it outside of the class.


Readonly:
It is like constant value once the value is assigned we can not change it at all.

For example id can not change
class Student {
    public name: string;
    readonly id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

student.id = 202; // this is not possible.



