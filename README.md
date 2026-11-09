# TypeScript

So the given Assaignment I have struggle to solve each question:

In problem solving 1 to 3 was comparatively easy. I have understood the generic function previously but faced difficulties to solve 4,5, but eventually I rid of it after watching the tutorial from youtube also and read documentary. 

1. Takes two numbers.
If the multiplier is not provided, multiply by 2.  Otherwise, multiply by the given multiplier.

2. Takes a generic input.
Checks its type using typeof.
Boolean → Returns Active or Inactive.
Number → Multiplies by 10.
String → Converts to lowercase.

3. Takes a tuple containing latitude, longitude, and location name.
Uses destructuring to get each value.
Returns a formatted string.
readonly prevents modification.
4. concatenateArrays()
Accepts multiple arrays.
Uses a loop to access each array.
Uses the spread operator to combine them.
Returns one combined array.

5. getPopularCourses()
Accepts an array of courses.
Checks whether each course is published.
Checks whether the student count meets the minimum.
Returns only matching courses.
6. pluckValues()
Takes an array of objects and a property name.
Uses keyof to ensure the property exists.
Uses map() to extract that property's values.
Returns the extracted values.
7. Employee and Manager
Creates an Employee parent class.
Defines properties using access modifiers.
Creates a Manager child class using extends.
Uses super() to call the parent constructor.
Adds a department property to Manager.
8. validateAgeAsync()
Accepts an age.
Returns a Promise
If age is below 18, immediately rejects with an Error.
If age is 18 or above, waits 1 second.
Then resolves with "Access Granted".

blog 1: https://github.com/sajibul-islam-robin/TypeScript/edit/main/README.md#:~:text=T-,Access_modifiers,-.md
blog 2: https://github.com/sajibul-islam-robin/TypeScript/edit/main/README.md#:~:text=type_aliases-,_vs_interface,-.md


