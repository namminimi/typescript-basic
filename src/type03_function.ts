let myFunction: (arg1: number, arg2: number) => number;
myFunction = function(x,y){
    return x + y
}

let num:number = myFunction(10,20);
console.log(num)
function myFunction2(x: number, y: number): number {
    return x + y
}

function myFunction3() : void {
    console.log("hi");
}

let myFunction4: () => void;
myFunction4 = function(){
    console.log("hi")
}

//interface
interface Add {
    (num1: number, num2: number): number;
}

let myFunction5: Add = function(num1, num2) {
    return num1 + num2
}