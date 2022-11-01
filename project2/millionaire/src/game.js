import {EASY_QUESTIONS} from './questions.js'
let i = -1;
let sum = 0;
let amount = 0;
qSum.innerText = sum;

const sumAmountCounter = () => {
  if (i==0) sum = 500;
  if (i==1) sum = 1000;
  if (i==2) sum = 2000;
  if (i==3) sum = 3000;
  if (i==4) {sum = 5000; amount = 5000;}
  if (i==5) sum = 10000;
  if (i==6) sum = 15000;
  if (i==7) sum = 25000;
  if (i==8) sum = 50000;
  if (i==9) {sum = 100000; amount = 100000;}
  if (i==10) sum = 200000;
  if (i==11) sum = 400000;
  if (i==12) sum = 800000;
  if (i==13) sum = 1500000;
  if (i==14) {sum = 3000000; amount = 3000000;}
  qSum.innerText = sum;
}

const update = () => {
  qA.style.color = "white";
  qB.style.color = "white";
  qC.style.color = "white";
  qD.style.color = "white";

  i++;
  qNumber.innerText = i+1;

  if (i<5){
    question.innerText = EASY_QUESTIONS[i].text;
    qA.innerText = EASY_QUESTIONS[i].options[0].text;
    qB.innerText = EASY_QUESTIONS[i].options[1].text;
    qC.innerText = EASY_QUESTIONS[i].options[2].text;
    qD.innerText = EASY_QUESTIONS[i].options[3].text;
  }
  if (i>4 && i<10){
    question.innerText = MEDIUM_QUESTIONS[i].text;
    qA.innerText = MEDIUM_QUESTIONS[i].options[0].text;
    qB.innerText = MEDIUM_QUESTIONS[i].options[1].text;
    qC.innerText = MEDIUM_QUESTIONS[i].options[2].text;
    qD.innerText = MEDIUM_QUESTIONS[i].options[3].text;
  }
  if (i>9 && i<14){
    question.innerText = HARD_QUESTIONS[i].text;
    qA.innerText = HARD_QUESTIONS[i].options[0].text;
    qB.innerText = HARD_QUESTIONS[i].options[1].text;
    qC.innerText = HARD_QUESTIONS[i].options[2].text;
    qD.innerText = HARD_QUESTIONS[i].options[3].text;
  }
}

const isContinue = () => {
  if (i==14){
    alert("Вітаємо! Ви виграли " + amount);
    document.location.reload();
  }
  question.innerText = "Чи бажаете завершити гру?";
  qA.innerText = "";
  qB.innerText = "";
  qC.innerText = "";
  qD.innerText = "";
  YESbtn.onclick = update;
  NObtn.onclick = gameOver;
}

const gameOver = () => {
  alert("Кінець гри. Ваш виграш = " + amount);
  document.location.reload();
}

const qAhandler = () => {
  if (EASY_QUESTIONS[i].options[0].isTrue) {
    qA.style.color = "green";
    qA.style.transition = "1s";
    sumAmountCounter();
    setTimeout(isContinue, 2000);
  }
  else {
    qA.style.color = "red";
    qA.style.transition = "1s";
    setTimeout(gameOver, 1000);
  }
}

const qBhandler = () => {
  if (EASY_QUESTIONS[i].options[1].isTrue) {
    qB.style.color = "green";
    qB.style.transition = "1s";
    sumAmountCounter();
    setTimeout(isContinue, 2000);
  }
  else {
    qB.style.color = "red";
    qB.style.transition = "1s";
    setTimeout(gameOver, 1000);
  }
}

const qChandler = () => {
  if (EASY_QUESTIONS[i].options[2].isTrue) {
    qC.style.color = "green";
    qC.style.transition = "1s";
    setTimeout(isContinue, 2000);
  }
  else {
    qC.style.color = "red";
    qC.style.transition = "1s";
    setTimeout(gameOver, 1000);
  }
}

const qDhandler = () => {
  if (EASY_QUESTIONS[i].options[3].isTrue) {
    qD.style.color = "green";
    qD.style.transition = "1s";
    setTimeout(isContinue, 2000);
  }
  else {
    qD.style.color = "red";
    qD.style.transition = "1s";
    setTimeout(gameOver, 1000);
  }
}

update();
console.log(i);
qA.onclick = qAhandler;
qB.onclick = qBhandler;
qC.onclick = qChandler;
qD.onclick = qDhandler;