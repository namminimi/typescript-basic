class ClassAnimal {
    protected name: string;
    //정적 멤버 변수 선언
    //this 나 인스턴스 접근할 수 없음. 접근방법 클래스명.변수명
    static eye = 2;
    constructor(name: string) {
        this.name = name;
    }
    //정적 메소드 클래스명.메소드명
    static eat():void{
        console.log("먹는다");
    }
}

class ClassCat extends ClassAnimal {
    public getname() : string {
        this.sound()
        return `cat name is ${this.name}`;
    }
    protected sound():void{
        console.log("야옹~~~~~");
    }
}

let cat = new ClassCat("레오");
console.log(cat.getname())
//정적멤버 접근방법
//console.log(ClassAnimal.eye)
ClassAnimal.eat()

////// 추상 클래스 시작
//선언/상속만 할수 있음
//인스턴스 생성할 수 없음!!!!!!
abstract class Person{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    //추상메소드는 선언부만 있음  //중괄호 안이 구현부 그안이 선언부
    abstract work(): void
}
class Teacher extends Person {  
    work():void {
        console.log("가르킵니다")
    }
}

class Engineer extends Person {
    work(): void {
        console.log("엔지니어 입니다")
    }
}
//let person1 = new Person("호호"); 생성(사용) 불가능
//상속받은 메소드로 생성자를 만들수 있음
let teacher1 = new Teacher("bella");
teacher1.work();
let engineer1 = new Engineer("lora")
engineer1.work();