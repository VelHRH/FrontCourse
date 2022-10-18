//  1
//  число 1

//  2
// let a = prompt("A:");
// let b = prompt("B:");
// let c = prompt("C:");
// if (c>b && b>a){
//   a*=2;
//   b*=2;
//   c*=2;
// }
// else{
//   a*=-1;
//   b*=-1;
//   c*=-1;
// }
// alert(a);
// alert(b);
// alert(c);

//  3
// let a = prompt("A:");
// let b = prompt("B:");
// let c = prompt("C:");
// if ((c>b && b>a) || (a>b && b>c)){
//   a*=2;
//   b*=2;
//   c*=2;
// }
// else{
//   a*=-1;
//   b*=-1;
//   c*=-1;
// }
// alert(a);
// alert(b);
// alert(c);

//  4
// let a = prompt("A:");
// let b = prompt("B:");
// let c = prompt("C:");
// if (Math.abs(a-b) < Math.abs(a-c)){
//   alert("B, " + Math.abs(a-b));
// }
// else{
//   alert("C, " + Math.abs(a-c));
// }

//  5
// let x = prompt("X:");
// let y = prompt("Y:");
// if (x==0 && y==0){
//   alert(0);
// }
// else if (y==0 && x!=0){
//   alert(1);
// }
// else if (x==0 && y!=0){
//   alert(2);
// }
// else {
//   alert(3);
// }

//  6
// let x = prompt("X:");
// let y = prompt("Y:");
// if (x>0 && y>0){
//   alert(1);
// }
// else if (y>0 && x<0){
//   alert(2);
// }
// else if (x<0 && y<0){
//   alert(3);
// }
// else {
//   alert(4);
// }

//  7
// let ax = prompt("Ax:");
// let ay = prompt("Ay:");
// let bx = prompt("Bx:");
// let by = prompt("By:");
// let cx = prompt("Cx:");
// let cy = prompt("Cy:");
// let dy, dx;
// if (ax==bx){
//   dx=cx;
//   if (ay==cy){
//     dy=by;
//   }
//   else{
//     dy=ay;
//   }
// }else if (ax==cx){
//   dx=bx;
//   if (ay==by){
//     dy=cy;
//   }
//   else{
//     dy=ay;
//   }
// } else if (bx==cx){
//   dx=ax;
//   if (ay==by){
//     dy=cy;
//   }
//   else{
//     dy=by;
//   }
// }
// alert(dx+" "+dy);

//  8
// let year = Number(prompt());
// if (year % 4==0 && (year % 100 != 0 || year % 400 == 0)){
//   alert("Високосний");
// }else{
//   alert("Не високосний");
// }

//  9
// let a = Number(prompt());
// if (a==0){
//   alert("Нульове")
// } else if (a%2==0){
//   if(a>0){
//     alert("Позитивне парне")
//   }
//   if(a<0){
//     alert("Негативне парне")
//   }
// } else if (a%2!=0){
//   if(a>0){
//     alert("Позитивне непарне")
//   }
//   if(a<0){
//     alert("Негативне непарне")
//   }
// }

//  10
// let a = Number(prompt());
// let type;
// if(a%2==0){
//   type="парне";
// }else{
//   type="непарне";
// }
// if (a>0 && a<10){
//   alert(type+" однозначне");
// }
// if (a>9 && a<100){
//   alert(type+" двозначне");
// }
// if (a>99 && a<1000){
//   alert(type+" трьохзначне");
// }

//  11
//префіксний - 1, 2, 3, 4
//постфіксний - 1, 2, 3, 4, 5

//  12
// обидва варіанти - 0, 1, 2, 3, 4

//  13
// for (let i=2; i<=10; i++){
//   if (i%2!=0) continue;
//   console.log(i);
// }

//  14
// let i=-1;
// while (++i < 3) {
//   alert( `number ${i}!` );
// }

//  15
// let i=0;
// while (i <= 100) {
//   i=prompt("Ваше число");
//   if (i==null) break;
// }

//  16
// let n = 100;
// let check;
// for (let i=2; i<n; i++){
//   check=0;
//   for (j=2; j<=i/2; j++){
//     if (i%j==0){check++; break;}
//   }
//   if (check==0) console.log(i);
// }

//  17
// let a = Number(prompt("1:"));
// let b = Number(prompt("2:"));
// alert((a+b)/2);

//  18
// let a = Number(prompt());
// alert(a**2);

//  19
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// alert(Math.max(a, b, c) - Math.min(a, b, c));

//  20
// let a = Number(prompt());
// if (a%2 == 0){
//   alert("Парне");
// } else{
//   alert("Непарне");
// }

//  22
// let d = Number(prompt("Ваше число в дюймах:"));
// let s = Number(prompt("Ваше число в см:"));
// alert(d + " дюймів = " + d * 2.54 + " см.")
// alert(s + " см = " + (s / 2.54).toFixed(2) + " дюймів.")

//  23
// alert("Хто хоче стати мілліонером?\n");
// let questions = [
//   {
//     number: 1,
//     text: "По якій ноті музиканти налаштовують свої інструменти?",
//     options: [
//       {
//         option: "A",
//         opText: "Мі",
//         isTrue: false
//       },
//       {
//         option: "B",
//         opText: "Фа",
//         isTrue: true
//       },
//       {
//         option: "C",
//         opText: "Соль",
//         isTrue: false
//       },
//       {
//         option: "D",
//         opText: "Сі",
//         isTrue: false
//       }
//     ]
//   },
//   {
//     number: 2,
//     text: "Як називається портрет, написаний з самого себе?",
//     options: [
//       {
//         option: "A",
//         opText: "Автопортрет",
//         isTrue: true
//       },
//       {
//         option: "B",
//         opText: "Самописка",
//         isTrue: false
//       },
//       {
//         option: "C",
//         opText: "Зеркальник",
//         isTrue: false
//       },
//       {
//         option: "D",
//         opText: "Самопал",
//         isTrue: false
//       }
//     ]
//   },
// ];
// for (let i=0; i<questions.length; i++){
//   alert(questions[i].number + '. ' + questions[i].text);
//   for (let j=0; j< questions[i].options.length; j++){
//     alert(questions[i].options[j].option + '. ' + questions[i].options[j].opText);
//   }
//   let ans = prompt("Введіть букву: ");
//   for (let j=0; j< questions[i].options.length; j++){
//     if (questions[i].options[j].option == ans){
//       if (questions[i].options[j].isTrue){
//         alert("ПРАВИЛЬНО");
//       } else{
//         alert("НЕПРАВИЛЬНО");
//       }
//     }
//   }
// }


//  24
// let a = Number(prompt());
// let res;
// if (a%2==0){
//   res=0;
//   while(a>0){
//     res+=a%10;
//     a=(a-a%10)/10;
//   }
// }else{
//   res=1;
//   while(a>0){
//     res*=a%10;
//     a=(a-a%10)/10;
//   }
// }
// alert(res);

//  25
// let a = Number(prompt("Сторона 1:"));
// let b = Number(prompt("Сторона 2:"));
// let c = Number(prompt("Сторона 3:"));
// if ((a+b>c) && (a+c>b) && (b+c>a)){
//   alert("Трикутник");
// } else {
//   alert("Не трикутник");
// }

//  26
// let ax = Number(prompt("Координата х точки:"));
// let ay = Number(prompt("Координата у точки:"));
// let r = Number(prompt("Rad:"));
// if (ax**2+ay**2<=r**2){
//   alert("Належить");
// } else {
//   alert("Не належить");
// }

//  27
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

//  28
// const user = {
//   name: "John"
//   };
// user.name = "Pete"; // Це працюватиме? - так, бо ми не змінюемо посилання

//  29
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = salaries.John+salaries.Ann+salaries.Pete;
// alert(sum);

//  30
// function multiplyNumeric(obj){
//   for (let key in obj){
//     if(Number.isFinite(obj[key])){
//       obj[key]+=2;
//     }
//   }
// }
// let o = {
//   A: "Василь",
//   B: 3,
//   C: -5.5,
// }
// multiplyNumeric(o);
// console.log(o);