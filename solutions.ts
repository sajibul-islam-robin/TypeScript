const multiplyValue= (value: number, multiplier?: number): number => {
    if (multiplier == undefined) {
        return value*2;
    } else {
        return value * multiplier;
    }
};



const processInput=<newType> (value:newType) =>{




   if(typeof value=="boolean"){
    if (value==true) {
    return ("Active");
    }
    else {
        return ("Inactive");
    }

   }
   else if(typeof value =="number"){
    return value *10;
   }

   else if (typeof value=="string") {
        return value.toLowerCase();
    }


}

const formatCoordinate =(values: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = values;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <new_type>(...arrays: new_type[][]): new_type[] => {
    const newArray: new_type[] = [];

    const size = arrays.length;
    const i = 0;
   for (let i = 0; i < size; i++) {
    newArray.push(...arrays[i]);
   }
    return newArray;

};
console.log(concatenateArrays(["a", "b"], ["c", "d"]))

console.log(concatenateArrays([1, 2], [3, 4], [5]));


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses  = (Courses: Course[], minStudents: number) => {
    const popularCourses: Course[] = [];

    for (const course of Courses) {
        if (course.isPublished == true && course.students>= minStudents) {
            popularCourses.push(course);
        }
    }
  

    return popularCourses;
};
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 500));



const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] => {
    return items.map(item => item[key]);
};





class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");

console.log(manager.getDetails());
console.log(manager.getRoleInfo());
