console.log("Lesson 7");

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

//? Task 01
//?  Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
//?  метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
//?  walk => `${this.name} walking`
//?  проверить, что методы работают

class Animal {
  name: string;

  constructor(name: string = "Animal") {
    this.name = name;
  }

  walk() {
    console.log(this.name + " " + "is walking");
  }

  eat() {
    console.log(this.name + " " + "is eating \"Hrum hrum\" ");
  }

  sleep() {
    console.log(this.name + " " + "is sleeping, Zzzzzzzz");
  }

}

console.group("7.1");
const unicorn = new Animal("Unicorn")
unicorn.walk()
unicorn.eat()
unicorn.sleep()
console.groupEnd();

//? Task 02
//?  Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
//?  параметра, реализовать методы roar и climb аналогично классу Animal
//?  проверить, что все методы работают

class Monkey extends Animal {
  constructor(name: string = "Monkey") {
    super(name);
  }

  roar() {
    console.log(this.name + " " + "is roaring, Aaaahrrr");
  }

  climb() {
    console.log(this.name + " " + "is climbing");
  }
}

console.group("7.2");
const monkey = new Monkey();
monkey.walk()
monkey.roar()
monkey.climb()
console.groupEnd();
//? Task 03
//?  Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
//?  параметра, реализовать методы speak и think аналогично классу Animal
//?  проверить, что все методы работают

class Human extends Monkey {
  constructor(name: string = "Human") {
    super(name);
  }

  speak() {
    console.log(this.name + " " + "is speaking, Bla bla bla");
  }

  think() {
    console.log(this.name + " " + "is thinking");
  }
}


console.group("7.3");
const human = new Human();
// ! Почему не могу получить __proto__ без @ts-ignore??
//@ts-ignore
console.log(human.__proto__)
// ! Почему нет human.prototype??
//@ts-ignore
console.log(human.prototype)
human.walk()
human.think()
human.speak()
console.groupEnd();

//? Task 04
//? Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование
// * file.js

// Task 05
// Используя метод Apply реализовать свой собственный метод bind
//@ts-ignore


// just a plug
export default () => {};
