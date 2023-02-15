interface Dog {
    readonly name: string,
    age: number
    color?:string
}
let dog1: Dog = {
    name: "구름",
    age: 3
}
let dog2: Dog = {
    name: "몽이",
    age: 2
}


type Score = "A" | "B" | "C" | "D" | "E" | "F" ;
interface Student {
    name: string;
    age: number;
    gender: string;
    [grade: number] : Score   //number 타입의 grade키가 옴
}
// 타입스크립트는  리터럴(값) 타입
//문자열 리터럴 타입 지정

let stu1: Student = {
    name: "창민",
    age: 30,
    gender: "남자",
    1: "A"
}

let stu2: Student = {
    name: "요한",
    age: 22,
    gender: "남자",
    1: "A"
}