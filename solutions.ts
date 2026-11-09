const multiplyValue= (value: number, multiplier?: number): number => {
    if (multiplier == undefined) {
        return value*2;
    } else {
        return value * multiplier;
    }
};



const processInput=(value: string| number|boolean) =>     {


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

   else {
    return value.trim().toLocaleLowerCase();
}
   

}

const formatCoordinate =(values: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = values;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <new_type>(...arrays: new_type[]): new_type[] => {
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
        if (course.isPublished === true && course.students >= minStudents) {
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


   

