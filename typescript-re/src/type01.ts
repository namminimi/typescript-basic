//타입지정
//일반변수, 매개변수, 객체속성등에 : type과 같은 형태로 타입을 지정
//일반 변수 타입지정
let number1:number = 10;
let str1: string = "abc"
let boolean1: boolean = true
//함수의 매개변수 타입지정
function add(num1:number, num2:number){
    return num1 + num2
}

const sum = add(1,2)

//배열타입지정
let arr1: string[] = []
let arr2: Array<number> = []
//유니언타입
let arr3: (number | string) [] = []
//배열항목의 타입을 단언할 수 업ㅄ을때 any사용
let arr4: any [] = []

//interface나 커스텀 타입 사용한 배열
interface User {
    name: string;
    age:number
}

arr1 = ['aa', 'c']
arr2 = [1,2,3,4,5]
arr3 = [1,2,3,4,"b","c"]
arr4 = ['Aa',1,true]
//타입추론
//타입스크립트는 타입표기가 없는 경우 코드를 읽고 분석하여 타입을 유추할수 있음
/////////

let arr5: User [] = []
arr5 = [{name: "a", age:20}, {name:"b",age:35}/* ,{name:"c"} */]

/* let arr6: 20 [] = []  //20이 타입이됨 20만 올수있음
arr6 = [20,10,20,20,20] */

//읽기 전용 배열
let arrA: readonly number [] = [1,2,3,4,5]
let arrC: ReadonlyArray<number> = [9,8,7,6,5]
let arrB: number [] = [1,2,3,4,5]

//arrA[0] = 10
arrB[0] = 10

//튜플 - 배열과 유사하며 차이점은 정해진 타입의 고정된 길이 배열을 표현
let tuple : [string, number];
tuple = ['a',1]
//tuple = ['a',1,2]
//tuple = [1,'A']

/////////////////////////////// 비교
//타입 개별 지정
let userId:number = 1234;
let userName: string = 'green'
let isVaild: boolean = true;

//튜플
let user: [number, string, boolean] = [1234, 'green', true]
console.log(user[0])
console.log(userId)

console.log(user[1])
console.log(userName)

console.log(user[2])
console.log(isVaild)

let tuple2: [string, number];
tuple2 = ['a',1]
tuple2 = ["b", 2]
tuple2.push(3)
console.log(tuple2)

let tuple3 : readonly [string, number] = ['green', 111]
tuple = ["a", 222] //전체요소 변경은 가능
//tuple3[0] = 'a'  //각요소 변경은 불가

//tuple3.push(3)


//열거형 enum
enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Week['Sun'])
console.log(Week[0])

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

console.log(Color.Red) //red
console.log(Color['Green'])



/////////////////객체 타입 Object - 반복적인 객체타입 사용시 interface나 type으로 지정
//인터페이스는 타입을 지정할때 같은 이름으로 타입을 지정할 수 있음  // 이런걸 선언적 확장(새로운 속성 추가 같은 이름으로 선언)이라고 함
interface IUser {
    name: string,
    age: number
}

interface IUser {
    isJob: boolean
}
// type은 위에 인터페이스처럼 같은이름으로 타입 지정 불가능
type IUser2 = {
    name: string,
    age: number,
    isJob: boolean
}
/* type IUser2 = {  //에러 발생
    job: string
} */
let user1: IUser = {
    name: 'green',
    age: 26,
    isJob: true
}
let user2: IUser2 = {
    name: 'green',
    age: 23,
    isJob: true
}