Type  aliases vs Interface in TypeScript:

when we write code in Typescript, we often see two keywords: type and interface. Both are used to define the structure of data, but they have many differences.

In TypeScript, type and interface are two ways to define the structure of data. They look similar and can often be used for the same purpose, but they have some important differences.

An interface is mainly used to define the structure of an object. Also type aliases main defination is same. but Type aliases can also define other types, such as strings, numbers, unions, and tuples.

An interface uses the extends keyword, A type alias uses the & operator. Also . Declaring the same type twice causes an error but not in Interface

I will use interface: 
  1. When I wnat build extensible object
  2. DEfining object structure


  Code: 
  interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
  
  I will use Type aliases:
    1. Union Types
    2. Working with tuples

    Code: type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
    

But if I have to choose betweeb two I will go for Interface. 


Both Type Aliases and Interfaces are useful in TypeScript. They can do similar things, especially when defining objects, but they have different strengths.



