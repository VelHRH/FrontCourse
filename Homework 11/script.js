//  1
// function camelize(str){
//   let arr = str.split('');
//   for (let i=0; i< arr.length; i++){
//     if (arr[i] =='-'){
//       arr.splice(i, 1);
//       arr[i] = arr[i].toUpperCase();
//     }
//   }
//   return arr.join('');
// }
// console.log(camelize("-webkit-transition"));

//  2
// function filterRange(arr, a, b){
//   let res =[];
//   for (let i=0; i<arr.length; i++){
//     if (arr[i]>=a && arr[i]<=b) res.push(arr[i]);
//   }
//   return res;
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

//  3
// function filterRangeInPlace(arr, a, b){
//   for(let i=0;i<arr.length;i++){
//       if(a<=arr[i] && arr[i]<=b){
//           arr.splice(i, 1);
//           i--;
//       }
//   }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

//  4
// let arr = [5, 2, 1, -10, 8, 4, 5, -40];
// for (let i=0; i<arr.length; i++){
//   for (let j=arr.length; j>i; j--){
//     if (arr[i]<arr[j]){
//       let t = arr[j];
//       arr[j] = arr[i];
//       arr[i] = t;
//     }
//   }
// }
// console.log(arr);

//  5
// function copySorted(arr){
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);

//6
// function Calculator(){
//   let a = parseInt(prompt("A:"));
//   let b = parseInt(prompt("B:"));
//   let oper = prompt("Operation:");
//   if (oper=="+") alert(a+b);
//   if (oper=="-") alert(a-b);
//   if (oper=="*") alert(a*b);
//   if (oper=="/") alert((a/b).toFixed(2));
//   return;
// }
// Calculator();

//  7
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// let names = users.map(i => i.name);
// console.log(names);

//  8
// const sortByAge = (users) => {
//   for (let i=0; i<users.length; i++){
//     for (let j=users.length - 1; j>i; j--){
//       if (users[j].age < users[i].age) {
//         let t = users[j];
//         users[j] = users[i];
//         users[i] = t;
//       }
//     }
//   }
// }
// let vasya = {name: " Вася ", age: 25};
// let petya = {name: " Петя ", age: 30};
// let masha = {name: " Маша ", age: 28};
// let arr = [vasya, petya, masha] ;
// sortByAge(arr);
// console.log(arr);

//  9
// function getAverageAge(users) {
//   let fage = users.reduce((previousValue, user) => previousValue + user.age, 0);
//   return fage/users.length;
// }
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];
// console.log(getAverageAge(arr));

//  10
// function unique(arr) {
//   let res = [];
//   for (let i=0; i<arr.length; i++){
//     let check=0;
//     for (let j=0; j<res.length; j++){
//       if (arr[i] == res[j]){
//         check++;
//         break;
//       }
//     }
//     if (check == 0) res.push(arr[i]);
//   }
//   return(res);
// }
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "крішна", ":-O"];
// console.log(unique(strings));

//  11
// function unique(arr) {
//  let set = new Set(arr);
//  return Array.from(set);
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values));

//  12
// function makeCounter() {
//   let count = 0;
//   return function() {
//   return count++; };
// }
//   let counter = makeCounter();
//   let counter2 = makeCounter();
//   alert (counter ()); // 0
//   alert (counter ()); // 1
//   alert (counter2 ()); //0
//   alert (counter2 ()); //1

//  13
// function Counter() {
//   let count = 0;
//   this.up = function() {
//   return ++count;
//   };
//   this.down = function() {
//   return --count;
//   };
//   }
//   let counter = new Counter();
//   alert(counter.up()); //1
//   alert(counter.up()); //2
//   alert(counter.down() ); //1

//  14
// function factorial(n){
//   if (n == 0) return 1;
//   return n*factorial(n-1);
// }
// console.log(factorial(6));

