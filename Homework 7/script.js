//  1
// let admin, name;
// name = "Valentin";
// admin = name;
// alert(admin);

//  2
//  BIRTHDAY - так, бо дата народження є незмінною, AGE - ні, бо в залежності від року вік змінюється

//  3
  // let name = "Ilya " ;
  // alert ( ` hello ${ 1 } ` ); // hello 1
  // alert ( ` hello ${ "name " } ` ); // hello name
  // alert ( ` hello ${ name } ` ); // hello Ilya

//  4
// "" + 1 + 0 //10
// "" - 1 + 0 //-1
// true + false; //1
// 6 / "3" //2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2; //NaN
// 7 / 0 //Infinity
// " – 9 " + 5 //– 9 5
// " – 9 " - 5 //NaN
// null + 1 //1
// undefined + 1 //NaN

//  5
// let a = 1, b = 1;
// let c = ++a; // c=2 a=2
// let d = b++; // d=1 b=2

//  6
// let a = 2;
// let x = 1 + (a *= 2 ); //a=4 x=5

//  7
// 5>4 //true
// "ананас" > "яблуко" //false
// "2" > "12" //true
// undefined == null //true
// undefined === null //false
// null == "\n0\n" //false
// null === +"\n0\n " //false

//  8
// let name = prompt("Your name?");
// alert(name);

//  9
// Так, бо тут 0 у вигляді строки

//  10
// let a = prompt("Яка «офіційна» назва JavaScript ?");
// if (a=="ECMAScript"){
//   alert("Правильно!");
// }
// else{
//   alert("Не знаєте? ECMAScript!");
// }

//  11
// let num = prompt();
// if (num>0){
//   alert(1);
// }
// if (num < 0){
//   alert(-1);
// }
// if (num ==0){
//   alert(0);
// }

//  12
// let result;
// result = a + b < 4 ? ' Мало ' : 'Багато';

//  13
// let message;
// message = login == ' Співробітник' ? ' Привіт ' : 
//   login == 'Директор' ? ' Добрий день! ' : 
//   login == '' ? 'Відсутній логін' : 
//   '';

//  14
// alert( null || 2 || undefined ); //2

//  15
// alert(alert (1) || 2 || alert(3)) // 1 та 2

//  16
// alert(1 && null && 2); //null

//  17
// alert(alert(1) && alert(2)); // 1 та undefined

//  18
// alert(null || 2 && 3 || 4 ); //3

//  19
// if (age>=14 && age <=90){
//   alert("Yes");
// }
// else{
//   alert("No");
// }

//  20
// if (!(age>=14 && age <=90)){
//   alert("Yes");
// }
// else{
//   alert("No");
// }
// if (age>=14 && age <=90){
//   alert("No");
// }
// else{
//   alert("Yes");
// }

//  21
// if (-1 || 0) alert( 'first'); //true, -1
// if (-1 && 0) alert( 'second' ); //false, 0
// if (null || -1 && 1) alert('third' ); //true, 1

//  22
// let login = prompt("Ваш логін");
// if (login=="Адмін"){
//   let pass = prompt("Пароль");
//   if (pass == "я головний") { 
//     alert("Здрастуйте!")
//   } else if (pass == null || pass == ""){ 
//     alert("Скасовано")
//   } else {
//     alert("Невірний пароль");
//   }
// } 
// else if (login == null || login==""){
//   alert("Скасовано");
// }
// else {
//   alert("Я вас не знаю");
// }

//  23
// if (browser == 'Edge') {
//    alert(" You've got the Edge! ");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
//    alert( ' Okay we support these browsers too' );
// } else {
//    alert( ' We hope that this page looks ok!' );
// }

//  24
// let a = +prompt( 'a?', '');
// switch (a){
//   case (0):
//     alert(0);
//     break;
//   case (1):
//     alert(1);
//     break;
//   case (2):
//     alert('2,3');
//     break;
//   case (3):
//     alert('2,3');
//     break;
//   default:
//     break;
// }

//  25
// let a = Number(prompt());
// a = a>0 ? ++a : a;
// alert(a);

//  26
// let a = Number(prompt());
// a = a>0 ? ++a : a-2;
// alert(a);

//  27
// let a = Number(prompt());
// a = a>0 ? ++a : a<0 ? a-2 : 10;
// alert(a);

//  28
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// let res = 0;
// if (a>0) res++;
// if (b>0) res++;
// if (c>0) res++;
// alert(res);

//  29
// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// let pos = 0;
// let neg = 0;
// if (a>0) pos++;
// if (b>0) pos++;
// if (c>0) pos++;
// if (a<0) neg++;
// if (b<0) neg++;
// if (c<0) neg++;
// alert("Positive - " + pos);
// alert("Negative - " + neg);

//  30
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// if (a>b) {alert("A");}
// else if (b>a) {alert("B");}
// else {
//   alert("Equal input");
// }

//  31
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// if (a>b) {alert("B");}
// else if (b>a) {alert("A");}
// else {
//   alert("Equal input");
// }

//  32
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// if (a<b) {alert("B"); alert("A");}
// else if (b<a) {alert("A"); alert("B");}
// else {
//   alert("Equal input");
// }

//  33
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// if (a>b) {
//   let t=a;
//   a=b;
//   b=t;
// }
// alert(a);
// alert(b);

//  34
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// if (a != b){
//   let s = a+b;
//   a =s;
//   b=s;
// }
// else{
//   a=0;
//   b=0;
// }
// alert(a);
// alert(b);

//  35
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// if (a != b){
//   if (a>b) b=a;
//   else a=b; 
// }
// else{
//   a=0;
//   b=0;
// }
// alert(a);
// alert(b);

//  36
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// let c = Number(prompt("C:"));
// if (a < b){
//   if (a<c) alert(a);
//   else alert(c);
// } else {
//   if (b<c) alert(b);
//   else alert(c);
// }

//  37
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// let c = Number(prompt("C:"));
// if (a < b){
//   if (b<c) alert(b);
//   else if (c<a) alert(a);
//   else alert(c);
// } else {
//   if (a<c) alert(a);
//   else if (c<b) alert(b);
//   else alert(c);
// }

//  38
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// let c = Number(prompt("C:"));
// if (a < b){
//   if (a<c) {
//     alert(a);
//     if (c>b){
//       alert(c);
//     }
//     else{
//       alert(b);
//     }
//   }
//   else {
//     alert(c);
//     alert(b);
//   }
// } else {
//   if (b<c) {
//     alert(b);
//     if (c>a){
//       alert(c);
//     }
//     else{
//       alert(a);
//     }
//   }
//   else {
//     alert(c);
//     alert(a);
//   }
// }

//  39
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// let c = Number(prompt("C:"));
// if (a < b){
//   if (a<c) alert(b+c);
//   else alert(a+b);
// } else {
//   if (b<c) alert(a+c);
//   else alert(a+b);
// }

//  40
// let a = Number(prompt("A:"));
// let b = Number(prompt("B:"));
// let c = Number(prompt("C:"));
// if ((a != b) && (a!=c)){
//   alert(a);
// }
// if ((b != a) && (b!=c)){
//   alert(b);
// }

// if ((c != b) && (c!=a)){
//   alert(c);
// }
