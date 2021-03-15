console.log("Lesson 6");

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

//! Solvation from video
/*interface IStudent {
  name: string;
  surname: string;
  groupNumber: number;
  progress: number[];
  averageMark: number;
}

class Student implements IStudent {
  name: string;
  surname: string;
  groupNumber: number;
  progress: number[];
  averageMark: number;

  constructor(name: string, surname: string, groupNumber: number, progress: number[]) {
    this.name = name;
    this.surname = surname;
    this.groupNumber = groupNumber;
    this.progress = progress;
    this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
  }

  private static sortStudent(s1: Student, s2: Student) {
    if (s1.averageMark > s2.averageMark) {
      return 1;
    } else if (s1.averageMark < s2.averageMark) {
      return -1;
    } else {
      return 0;
    }
  }

  static sort(arr:Array<Student>) {
    const temp = [...arr];
    return temp.sort(this.sortStudent);
  }

  private static isAllMarksEqual(marks: number[], mark: number) {
    return marks.every(item => item === mark);
  }

  private static filterStudent(arr:Array<Student>) {
    const result: Array<Student> = [];
    arr.forEach(item => {
      if(this.isAllMarksEqual(item.progress, 4) || this.isAllMarksEqual(item.progress, 5)) {
        result.push(item);
      }
    });
    return result;
  }

  static printGoodStudent(arr:Array<Student>) {
    this.filterStudent(arr).forEach(s => {
      console.log(`Studen - ${s.surname}, Group - ${s.groupNumber}`);
    });
  }
}

let students:Array<Student> = [];

students.push(new Student('Eugene', 'Sheuchuk', 1, [4,4,4,4,4]));
students.push(new Student('Vlad', 'Bizin', 2, [5,5,5,5,5]));
students.push(new Student('Hanna', 'Kicel', 3, [4,5,4,5,5]));
students.push(new Student('Nick', 'Stone', 4, [3,4,3,5,3]));
students.push(new Student('Alex', 'Page', 5, [3,4,3,3,4]));
students.push(new Student('Test', 'Testovich', 6, [3,5,3,5]));

//console.log(Student.sort(students));
Student.printGoodStudent(students);*/


class Student {
  name: string;
  surname: string;
  groupNumber: number;
  progress: Array<number>;

  constructor(
    name: string,
    surname: string,
    groupNumber: number,
    progress: Array<number>
  ) {
    this.name = name;
    this.surname = surname;
    this.groupNumber = groupNumber;
    this.progress = progress;
  }
}

const students = [
  new Student("Joe", "Doe", 13588, [2, 3, 5, 1, 4]),
  new Student("Bill", "Milligan", 13588, [5, 3, 5, 4, 4]),
  new Student("Carl", "River", 12578, [2, 3, 3, 3, 4]),
  new Student("Clara", "Mitchal", 42478, [5, 5, 5, 4, 4]),
  new Student("Noe", "Cuer", 42478, [2, 3, 2, 1, 4]),
  new Student("Tobby", "McGouer", 12578, [5, 5, 5, 4, 3]),
  new Student("Merry", "Key", 13588, [5, 5, 5, 1, 5]),
  new Student("Donald", "Trump", 44232, [5, 5, 5, 5, 5]),
  new Student("Margaret", "Tetcher", 42478, [5, 4, 5, 4, 4]),
  new Student("Tania", "Kozlova", 13588, [5, 5, 5, 5, 5]),
];

function getBestStudent(arr: Array<Student>) {
  arr.forEach((s) => !s.progress.some((m) => m < 4) && console.log(s));
}

console.group("Task 6.1");

students.sort((a, b) => {
  const middleA = a.progress.reduce((a, n) => a + n) / a.progress.length;
  const middleB = b.progress.reduce((a, n) => a + n) / a.progress.length;
  return middleB - middleA;
});
console.log("Sorted bu average progress => ", students);
getBestStudent(students);

console.groupEnd();

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class Test {
  variable1: number;
  variable2: number;

  constructor(variable1: number, variable2: number) {
    this.variable1 = variable1;
    this.variable2 = variable2;
  }
}

console.group("Task 6.2");
console.log("??????????????????");
console.groupEnd();

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

class Time {
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  setHours(hours: number) {
    if (hours <= 23 && hours >= 0) {
      this.date.setHours(hours);
    } else {
      throw new Error("Invalid hours");
    }
  }

  setMinutes(minutes: number) {
    if (minutes <= 59 && minutes >= 0) {
      this.date.setMinutes(minutes);
    } else {
      throw new Error("Invalid minutes");
    }
  }

  setSeconds(seconds: number) {
    if (seconds <= 59 && seconds >= 0) {
      this.date.setMinutes(seconds);
    } else {
      throw new Error("Invalid seconds");
    }
  }

  getTime() {
    console.log(this.date.toLocaleTimeString("ru"));
  }
}

console.group("Task 6.3");

const time = new Time(new Date());
time.getTime();
time.setHours(21);
time.setMinutes(59);
time.getTime();

console.groupEnd();

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Customer {
  surname: string;
  name: string;
  address: string;
  _bankAcc: number;

  constructor(surname: string, name: string, address: string) {
    this.surname = surname;
    this.name = name;
    this.address = address;
    this._bankAcc = this._generateBankAccNumber();
  }

  _generateBankAccNumber() {
    return parseInt(String((Math.random() * 9 + 1) * Math.pow(10, 8)), 10);
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    console.log("Name: ", this.name);
  }

  setSurname(surname: string) {
    this.surname = surname;
  }

  getSurname() {
    console.log("Surname: ", this.surname);
  }

  setAddress(address: string) {
    this.address = address;
  }

  getAddress() {
    console.log("Address: ", this.address);
  }

  getBankAcc() {
    console.log("BankAcc: ", this._bankAcc);
  }
}

const customerArr: Customer[] = [
  new Customer("Robinson", "Joe", "WallStr"),
  new Customer("Holms", "Sherlok", "BakerStr"),
  new Customer("Dark", "Jan", "LibertyStr"),
  new Customer("Karenina", "Anna", "RedStr"),
  new Customer("Duema", "Alexander", "NapoleonStr"),
];

function sortBySurname(arr: Customer[]) {
  return [...arr].sort((a, b) => {
    return a.surname.localeCompare(b.surname, "en");
  });
}

function getBankAccRange(from: number, to: number, customers: Customer[]) {
  return customers.filter((c) => {
    if (c._bankAcc >= from && c._bankAcc <= to) {
      return c;
    }
  });
}

console.group("Task 6.4");
console.log(customerArr);
console.log("Sorted customers => ", sortBySurname(customerArr));
console.log(
  "Filtered customer => ",
  getBankAccRange(400000000, 900000000, customerArr)
);
console.groupEnd();

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {
  model: string;
  cylinders: number;
  power: number;

  constructor(model: string, cylinders: number, power: number) {
    this.model = model;
    this.cylinders = cylinders;
    this.power = power;
  }

  setModel(newModel: string) {
    console.log(`Car model was changed from => ${this.model} to => ${newModel}`)
    this.model = newModel;
  }
}

class Truck extends Car {
  capacity: number;

    constructor(model: string, cylinders: number, power: number, capacity: number) {
      super(model, cylinders, power);
      this.capacity = capacity;
    }

    setCapacity(newCapacity: number) {
      console.log(`Car capacity was changed from => ${this.capacity} to => ${newCapacity}`)
      this.capacity = newCapacity;
    }
}

console.group("Task 6.5");
const car = new Car("Tesla", 4, 700);
console.log(car);
car.setModel("BMW");
console.log(car);

const truck = new Truck("Man", 10, 10000, 30000);
console.log(truck)
truck.setModel("Iveko")
truck.setCapacity(45000);
console.log(truck)

console.groupEnd();

console.log(Truck instanceof Car) //? why false?

// just a plug
export default () => {};
