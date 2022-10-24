//  1
// function isEmpty(obj){
//   if (Object.keys(obj) == 0){
//     return true;
//   }
//   return false;
// }
// let obj1 = {age: 19};
// console.log(isEmpty(obj1));

//  2
// function multiplyNumeric(obj){
//   for (key in obj){
//     if (typeof obj[key] == 'number'){
//       obj[key]*=2;
//     }
//   }
// }
// let obj2 = {age: 19, name: "Valik", year: 2003};
// multiplyNumeric(obj2)
// console.log(obj2);

//  3
// function readNumber(){
//   while (true){
//     let inp = prompt("Введіть число");
//     if ((inp==null) || (inp=='')) return null;
//     if (!isNaN(inp)) return inp;
//   }
// }
// alert(readNumber());

//  4
// function random(min, max){
//   return Math.random() * (max - min) + min;
// }
// console.log(random(1, 5));

//  5
// function random(min, max){
//   return Math.round(Math.random() * (max - min) + min);
// }
// console.log(random(1, 5));

//  6
// function ucFirst(str){
//   return str.slice(0, 1).toUpperCase()+str.slice(1);
// }
// console.log(ucFirst("вася"));

//  7
// function checkSpam(str){
//   let strUC = str.toUpperCase();
//   if (strUC.includes('XXX') || strUC.includes('VIAGRA')) {
//     return true;
//   }
//   return false;
// }
// console.log(checkSpam("innocent rabbit"));

//  8
// function truncate(str, maxlength){
//   if(str.length > maxlength){
//     return (str.slice(0, maxlength-3)+"...");
//   }
//   return str;
// }
// console.log(truncate("Усім привіт!", 20));

//  9
// function extractCurrencyValue(str){
//   return str.slice(1,str.length);
// }
// console.log(extractCurrencyValue('$120'));

//  10
// function sumInput(){
//   let ar = [];
//   while (true){
//     let inp = prompt();
//     if (inp==null || inp=='' || isNaN(inp)) break;
//     ar.push(inp);
//   }
//   let sum=0;
//   for (let i=0; i<ar.length; i++){
//     sum+=parseInt(ar[i], 10);
//   }
//   return sum;
// }
// alert(sumInput());

//  11
// Без else функція буде працювати так само, бо функція завершує роботу після return

//  12
// function checkAge1(age) {
//   return age > 18 ? true : confirm('Батьки дозволили ?');
// }
// function checkAge2(age) {
//   return (age > 18 || confirm('Батьки дозволили ?'));
// }
// console.log(checkAge2(18));

//  13
// function min(a, b) {
//   if (a>b) return b;
//   return a;
// }
// console.log(min(1, 1));

//  14
// function pow(x, n) {
//   let res=1;
//   for(let i=0; i<n; i++){
//     res*=x;
//   }
//   return res;
// }
// let x = prompt("X:");
// let n = prompt("N:")
// alert(pow(x, n));

//  15

// function ask(question, yes, no) {
//   if (confirm(question)) yes( )
//   else no( );
//   }
//   ask (
//   "Ви згодні?",
//   () => { alert ("Ви погодилися."); },
//   () => { alert ("Ви скасували виконання."); }
//   );

//  16
// const res = (income, cost, spending) => {
//   let counter = 0;
//   let mon = 0;
//   while (true){
//     counter = counter + income - spending;
//     mon++;
//     if (counter >= cost) return mon;
//   }
// }
// console.log(res(3333, 8000, 1750));

//  17
// const fun = () => {
//   let res=0;
//   for (let i=0; i<10; i++){
//     let a = prompt();
//     if(a<0){
//       res+=parseInt(a, 10);
//     }
//   }
//   return res;
// }
// alert(fun());