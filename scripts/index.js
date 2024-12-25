console.log("App start \n\n");

// two variable declare a = 10, b=20
// c --> add, d --> mutiply

// let a = 10;
// let b = 20;

// let c = add(a, b); // function
// console.log(c);

// let d = multiply(a, b); // function
// console.log(d);

// let e = add(c, d); // function
// console.log(e);

// function add(num1, num2) {
//   return num1 + 90;
// }

// function multiply(num3, num4) {
//   return num3 * num4;
// }

// five subject name declare pani unoda mark assign
// total = function addMarks add pani --> variable la store --> variable print
// avg ==> function avgMark --> total = addMarks() --> total / 5

// let eng = 66;
// let tam = 78;
// let mat = 93;
// let sci = 84;
// let soc = 93;

// function marks(s1, s2, s3, s4, s5) {
//   return s1 + s2 + s3 + s4 + s5;
// }

// let total = marks(eng, tam, mat, sci, soc);

// console.log(total);
// let avg = average(total);
// console.log(avg);

// function average(kunju) {
//   return kunju / 5;
// }

// add two numbers
// sub two numbers
// multiply two numbers
// result add these three

// let a = 1;
// let b = 6;

// function add(n1, n2) {
//   return n1 + n2;
// }

// function sub(n1, n2) {
//   return n1 - n2;
// }

// function multiply(n1, n2) {
//   return n1 * n2;
// }

// function total(add, sub, multi) {
//   return add + sub + multi;
// }

// let valli = add(a, b);
// console.log(valli);
// let suriya = sub(a, b);
// console.log(suriya);
// let vasu = multiply(a, b);
// console.log(vasu);
// let liyasu = total(valli, suriya, vasu);
// console.log(liyasu);

// let tam = 89;
// let eng = 95;
// let mat = 90;
// let sci = 98;
// let soc = 85;

// function fullMarks(m1, m2, m3, m4, m5) {
//   return m1 + m2 + m3 + m4 + m5;
// }

// function averageOfMarks(a1) {
//   return a1 / 5;
// }

// let allSub = fullMarks(tam, eng, mat, sci, soc);
// console.log(allSub);
// let allAvg = averageOfMarks(allSub);
// console.log(allAvg);

// let year = 2300;
// function isLeap(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return `Leap year.`;
//       } else {
//         return `Not a leap year.`;
//       }
//     } else {
//       return `Leap year.`;
//     }
//   } else {
//     return `Not a leap year.`;
//   }
// }

// let leapYear = isLeap(year);
// console.log(leapYear);

// age = 0-18 --> Young; 18-40 --> Middle age; >40 --> old age; shld give age and get result as young, middle, old.

// let vayasu = 18;
// function ageChart(age) {
//   if (age > 0 && age <= 18) {
//     return `Young. `;
//   } else if (age > 18 && age <= 50) {
//     return `Middle age.`;
//   } else if (age > 50) {
//     return `Old age.`;
//   }
// }

// let chartForAge = ageChart(vayasu);
// console.log(chartForAge);

// let isMood = true; --> go and drink milk. or do your work.

// let isMood = false;

// function milkGame(paal) {
//   if (paal === true) {
//     return `Go and drink Milk.`;
//   } else {
//     return `Sootha Mooditu po daaa.`;
//   }
// }

// let game = milkGame(isMood);
// console.log(game);

// let playerNames = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// let randomNumber = Math.floor(Math.random() * (playerNames.length - 1 - 0) + 0);

// console.log(playerNames[randomNumber]);

// playerNames.push("Srivalli", "Suriya");
// console.log(playerNames[5]);
// console.log(playerNames);
// console.log(playerNames[playerNames.length - 2]);
// playerNames.pop();
// playerNames.pop();
// console.log(playerNames);

// let name1 = "Srivalli";
// let name2 = "Suriya";

// function couples(wife, husband) {
//   let match = [];
//   match.push(wife, husband);
//   return match;
// }

// let names = couples(name1, name2);
// console.log(names);

// let playerNames = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// let name1 = "Srivalli";
// let name2 = "Suriya";

// function lunchPay(players) {
//   playerNames.push(name1);
//   playerNames.push(name2);

//   console.log(playerNames);
//   let random = Math.ceil(Math.random() * (playerNames.length - 1 - 0) + 0);
//   console.log(random);
//   return players[random];
// }

// let gamePlay = lunchPay(playerNames);
// console.log(gamePlay);

// let totalMarks = [85, 95, 75, 65, 65];

// function examResult(kootu) {
//   let result = kootu[0] + kootu[1] + kootu[2] + kootu[3] + kootu[4];
//   return result;
// }

// let totals = examResult(totalMarks);
// console.log(totals);

// function squareOfNumber(numb) {
//   return numb * numb;
// }
// let squ = squareOfNumber(7);
// console.log(squ);

// function convertTemp(celsius) {
//   let temp = (celsius * 9) / 5 + 32;
//   return temp;
// }
// let fahrenheit = convertTemp(10);
// console.log(fahrenheit);

// function areaOfRectangle(l1, w1) {
//   return l1 * w1;
// }

// let area = areaOfRectangle(30, 30);
// console.log(area);

// function areaAndPerimeter(radius) {
//   return `Area: ${Math.PI * radius * radius}, Perimeter: ${
//     2 * Math.PI * radius
//   }`;
// }
// let aP = areaAndPerimeter(25);
// console.log(aP);

// let randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
// console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));

// let subMarks = [88, 95, 89, 90, 100];

// function allSubTotal(add) {
//   return add[0] + add[1] + add[2] + add[3] + add[4];
// }

// let total = allSubTotal(subMarks);
// console.log(total);

// let nameList = [];

// nameList.push("valli");
// console.log(nameList);

// let title = "suriya";
// nameList.push(title);
// console.log(nameList);

// nameList.pop();
// console.log(nameList);

// let nameList = [];

// function pushName(naam1, naam2) {
//   nameList.push(naam1, naam2);
// }

// pushName("Valli", "Sri");
// pushName("Suriya", "Scene");
// pushName("Shivan", "Mygod");
// pushName("Whatever", "whatever");
// console.log(nameList);

// function popName() {
//   nameList.pop();
// }

// popName();
// popName();
// popName();
// console.log(nameList);

function findIndexTT(array, word) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      result = i;
      break;
    }
  }
  return result;
}
// let ind = findIndex(["green", "red", "blue", "red"], "red");
// console.log(ind);

function uniqueTT(arr) {
  let result2 = [];
  // console.log("ARr", arr);
  for (let j = 0; j < arr.length; j++) {
    // console.log(i);
    if (findIndexTT(result2, arr[j]) === -1) {
      result2.push(arr[j]);
    }
  }
  return result2;
}
let uni = uniqueTT(["green", "red", "blue", "red"]);
let uni1 = uniqueTT(["red", "green", "green", "red"]);
console.log(uni);
console.log(uni1);
