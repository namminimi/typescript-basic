//기본데이터타입
//string, number, boolean, null, undefined,
//Array, object
//기본타입
let booleanType:boolean = true;
let numType:number = 30;
let stringType:string = "green";
let undefinedType:undefined = undefined;
let nullType:null = null;
let objType:object = {}
let anyType:any = 123;





//배열
//구문 number [], Array<number>

let arr:number[] = [0,1,2,3,4,5];
let arr2:Array<number> = [1,2,3,4,5];
let strArr: string[] = ["a", "b", "c", "d", "e", "f",]
let strArr2 : Array<string> = ["가", "나", "다", "라","마"]
let anyArr: any [] = [30, "a", true];


//유니언 타입(다중타입)
let numStr: number | string;
numStr = 30;
numStr = "A"

let numStrArr: (number | string) [] = [12, "a", "b"]


//객체는 프로퍼티에 대한 타입을 지정함
//옵셔널 프로퍼티 ?키워드 ---> 프로퍼티가 있어도되고 없어도됨  ?없으면 에러뜸
//읽기 전용 프로퍼티 ====> readonly키워드

//interface IUser {readonly name: string, age:number, isJob?:boolean}
interface IUser {
    readonly name: string, age:number, isJob?:boolean
}
let user1: IUser = {
    name: "green",
    age: 30,
    isJob: true
}

let user2: { readonly name: string, age:number, isJob?:boolean} = {
    name: "blue",
    age: 20,
    isJob: true
}

console.log(user1.name);
//user1.name = "dddd"  //읽기 전용이라 변경 불가능

numType = 30000;
// stringType = 20; 타입이 맞지않아서 오류