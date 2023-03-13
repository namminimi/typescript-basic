let myFun:(arg1: number, arg2: number) => number;
myFun = function(x,y){
    return x + y;
}

const sum2 = myFun(10, 20);  //타입추론

//함수형태 타입선언
function myFun2(x:number, y: number): number {
    return x + y
}


function myFun3(x: number, y: number): void {
    console.log(`두수의 합은 ${x + y}입니다`);
}

//매개변수도 없고 리턴타입도 없을 경우

let myFun4:() => void

myFun4 = function() {
    console.log("hi")
}

//함수 옵셔널 매개변수
function printName(name?: string) {
    console.log(`Hello ${name} || "green"`)

}

printName("abc")
printName()

//디폴트 매개변수
function printName2(name='green'){
    console.log(`hello ${name}`)
}
printName2("abc")
printName2()

//함수 나머지 매개변수
function totalAdd(...nums: number []) {
    let sum = 0;
    nums.forEach(num => sum += num)
    console.log(sum)
}

totalAdd(1,2,3,4,5,6,7,7)
totalAdd(1,2,3,4)

//함수 인터페이스 정의
//구문
   /*  interface AddNum {
        (매개변수 타입 지정) : 리턴타입
    } */

interface AddNum {
    (num1: number, num2: number) : void
}

let myFun5 : AddNum = (num1, num2) => {
    console.log(num1 + num2)
}