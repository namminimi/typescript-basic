//Generic
function getSize<T>(arr: T []):number {
    return arr.length;
}
const numArr = [1, 2, 3, 4];
getSize<number>(numArr); // 4

const strArr23 = ['a', 'b', 'c'];
getSize<string>(strArr23); //3

const boolArr2 = [true, false, true, true];
getSize<boolean>(boolArr2); //4

const objArr21 = [{}, {name: "a"}, {}, {age: 30}, {}];

getSize<object>(objArr21); //5

interface Animal<T> {
    name: string;
    color: string;
    option: T;
}

const animal2: Animal<string> = {
    name: "고양이",
    color: "검정",
    option: "특이함"
}
const animal1: Animal<{age: number; hobby: string}> = {
    name: "강아지",
    color: "흰색",
    option: {
        age: 3,
        hobby: "공놀이"
    }
}

//제네릭 확장 extends
interface Student100 {
    name: string;
    age: number;
}

interface Car {
    name: string;
}

interface Fruit {
    color: string;
}

const stu100: Student100 = {
    name: "a",
    age: 19
}
const car1: Car = {
    name: "소나타"
}
const fruit1: Fruit = {
    color: "빨강"
}
function printobjName<T extends {name: string}>(data: T): string {
    return data.name;
}

printobjName(stu100);
printobjName(car1);
//printobjName(fruit1);
type U = number | string | boolean;
interface MyType<T extends U> {
    name: string;
    value: T
}

const dataA : MyType<string> = {
    name: "하하",
    value: "제네릭"
}

const dataB : MyType<number> = {
    name: "호호호",
    value: 123
}

const dataC: MyType<boolean> = {
    name: "흐흐흐",
    value: true
}

////////////////////////////////// 실습1
interface changmin1 {
    name: string
    color: string
}

interface changmin2 {
    name: string
    color: string
}

interface changmin3 {
    name: string
}

const chang1: changmin1 = {
    name: "창민",
    color: "흰색"
}

const chang2: changmin2 = {
    name: "창민1",
    color: "블루"
   
}

const chang3: changmin3 = {
    name: "창민2",
}




function printColor<T extends {color: String}>(data: T) {
    console.log(data.color)
}

printColor(chang1)
printColor(chang2)
//printColor(chang3) //프로퍼티가 없어서 에러 발생