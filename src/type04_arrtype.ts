//구문 type[] , Array<type>
//문자열만 가지는 배열
let strarr: string[] = ["a", "b", "c", "d", "e",]
//or
let strarr2 : Array<string> = ["🍔","🍟","🌭"];
//숫자만 가지는 배열
let numarr : number[] = [1, 2, 3, 4, 5]
//or
let numarr2 : Array<number> = [1, 2, 3, 4, 5]
//숫자와 문자열가지는 배열
let numstrArr : (number | string) [] = [1, 2, "a"]
//or
let numstrArr2 : Array<string | number> = ["가", 1, "a"]
//객체 타입을 가지는 배열
let objArr : object [] = [
    {
        name: "green",
        age: 30
    },
    {
        isjob: "yellow",
        age: 30
    }
]

//interface
interface User {
    readonly name: string;
    age: number;
    isjob?: boolean;
}
let objArr2 : User [] = [
    {
        name: "green",
        age: 30
    },
    {
        name: "yellow",
        age: 30
    }
]

const newname = objArr2[0].name
//읽는 거 가능 수정 불가능

//일기 전용 배열 생성
let readArr : readonly number [] = [1, 2, 3, 4];
//readArr.push(5) //Error
//readArr[0] = 10 //Error

