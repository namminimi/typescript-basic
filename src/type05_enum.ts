enum Week {
    Sun,
    Man,
    Tue,  // Tue=7 값을주면 7 8 9 10 순으로 지정됨
    Wed,
    Thu,
    Fri,
    Sat
}
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

console.log(Week.Man);
console.log(Week.Sat);
console.log(Week[0]);
console.log(Week[1]);
console.log(Color.Red);
console.log(Color["Green"]);
let aaa:Color = Color.Blue; // 정해진 값 사용해야함

enum StarbucksGrade {
    WELCOME,
    GREEN,
    GOLD
}

function getDicound(v: StarbucksGrade) : number {
    switch(v){
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;        
    }
}
console.log(getDicound(StarbucksGrade.WELCOME))
