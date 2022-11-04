// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Aufgabe 1
let user = {
  name: 'John',
  surname: 'Smith',
};

user['name'] = 'Pete';

delete user.name;

// Aufgabe 2
function isEmpty(obj) {
  let abfrage = true;
  for (let blablabla in obj) {
    abfrage = false;
  }
  return abfrage;
}

let schedule = {};
alert(isEmpty(schedule));
let lel = { name: 'John' };
alert(isEmpty(lel));

// Aufgabe 3
// Eine Konstante ist dafür da, nicht re-deklariert oder nicht neu zugewiesen zu werden.
// Daher sollte es in der Tat möglich sein. Man fügt sozusagen eine "Liste" hinzu, wo die Konstante hinzeigt.
// Test:
const constTestung = { name: 'John' };
constTestung.name = 'Pete';
alert(constTestung.name);

// Aufgabe 4
let salaries = {
  John: 100,
  ann: 160,
  Pete: 130,
};

function sumSalaries(obj) {
  let summe = 0;
  for (let i in obj) {
    summe += obj[i];
  }
  return summe;
}
alert(sumSalaries(salaries));

// Aufgabe 5
function multiplyNumeric(obj) {
  for (let i in obj) {
    if (Number.isInteger(obj[i])) {
      obj[i] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: 'Menu',
};

// Aufgabe 6
let stefan = {
  name: 'John',
  go: function () {
    alert(this.name);
  },
};

stefan.go(); // Korrektur:

// Aufgabe 7
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White rabbit');
alert(rabbit.name);

// Aufgabe 8
