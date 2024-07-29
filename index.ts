let num: number = 10
let str: string = "John"

const arrNum: number[] = [1, 2, 3, 4, 5]

interface IUser {
    name: string;
    email: string;
    age?: number
}

const user1: IUser = {
    name: "John",
    email: "john@gmail.com",
    age: 20
}

function sum(a: number, b: number): void {
    console.log("asd");
}

sum(10, 5)