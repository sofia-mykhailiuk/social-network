let a = 18;
let b = a; //18

b = 6;
console.log(b); //6
console.log(a); //18

let d = {
  name: "Dmitriy",
  age: 18,
  isOnline: true,
  friends: ["oleg", "andrew", "nazar"],
  relatives: {
    mom: {
      name: "Oksana",
      age: 43,
    },
    dad: {
      name: "vasyl",
      age: 53,
    },
  },
  soulmates: ["oii", "joi", "doff"],
};

let e = d;

e.age = 56;
console.log(d.age); // 56

// e та d являються лише ссилками на один і той самий об'єкт
// щоб e мало свій власний об'єкт скопійований від d, використовуємо спред-оператор

let g = {
  ...d,
};

g.age = 78;
console.log(d.age); //56

// але спред оператор дає лише поверхневе копіювання (shalow copy)
// тобто копіюються лише властивості об'єкта із примітивними значеннями
// якщо ж властивість містить об'єкт, масив - спред оператор дає лише ссилку на той самий об'єкт
// і зміни у копії будуть змінювати і вихідний об'єкт

let doughter = {
  name: "sofia",
  age: 20,
};
(g.relatives.doughter = doughter), console.log(d.relatives.doughter); // { mom: {…}, dad: {…}, doughter: {…} }

console.log(g.relatives === d.relatives); //true, бо це ссилки на один і той же ж об'єкт

// для повного (глибокого) deep copy необхідно ...копіювати і підоб'єкти
g.soulmates = [...d.soulmates];
g.soulmates.push("dfff");
console.log(g.soulmates); // ["oii", "joi", "doff", "dfff"]
console.log(d.soulmates); // ["oii", "joi", "doff"];
