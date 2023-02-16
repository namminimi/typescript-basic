"use strict";
let dog1 = {
    name: "구름",
    age: 3
};
let dog2 = {
    name: "몽이",
    age: 2
};
let stu1 = {
    name: "창민",
    age: 30,
    gender: "남자",
    1: "A"
};
let stu2 = {
    name: "요한",
    age: 22,
    gender: "남자",
    1: "A"
};
let readucer1 = {
    name: "그린",
    age: 30,
    phone: "01012341234"
};
const myTv = {
    turnOn() {
        return true;
    },
    turnOff() {
        console.log('off');
    }
};
class Student2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const green = new Student2("green");
console.log(green.getName());
