import {
 EASY_QUESTIONS,
 MEDIUM_QUESTIONS,
 HARD_QUESTIONS,
} from "./questions.js";
let i = -1;
let sum = 0;
let amount = 0;
let counMistake = 0;
qSum.innerText = sum;
let contMode;

qA.style.transition = "1s";
qB.style.transition = "1s";
qD.style.transition = "1s";
qC.style.transition = "1s";

function shuffle(array) {
 let currentIndex = array.length,
  randomIndex;
 while (currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex],
   array[currentIndex],
  ];
 }
 return array;
}

shuffle(EASY_QUESTIONS);
shuffle(MEDIUM_QUESTIONS);
shuffle(HARD_QUESTIONS);

const getRandomInt = (max) => {
 return Math.floor(Math.random() * max);
};

const sumAmountCounter = () => {
 if (i == 0) sum = 500;
 if (i == 1) sum = 1000;
 if (i == 2) sum = 2000;
 if (i == 3) sum = 3000;
 if (i == 4) {
  sum = 5000;
  amount = 5000;
 }
 if (i == 5) sum = 10000;
 if (i == 6) sum = 15000;
 if (i == 7) sum = 25000;
 if (i == 8) sum = 50000;
 if (i == 9) {
  sum = 100000;
  amount = 100000;
 }
 if (i == 10) sum = 200000;
 if (i == 11) sum = 400000;
 if (i == 12) sum = 800000;
 if (i == 13) sum = 1500000;
 if (i == 14) {
  sum = 3000000;
  amount = 3000000;
 }
 qSum.innerText = sum;
};

const update = () => {
 qA.style.color = "white";
 qB.style.color = "white";
 qC.style.color = "white";
 qD.style.color = "white";
 if(contMode!=0){
 i++;
 qNumber.innerText = i + 1;
 if (i < 5) {
  question.innerText = EASY_QUESTIONS[i].text;
  qA.innerText = EASY_QUESTIONS[i].options[0].text;
  qB.innerText = EASY_QUESTIONS[i].options[1].text;
  qC.innerText = EASY_QUESTIONS[i].options[2].text;
  qD.innerText = EASY_QUESTIONS[i].options[3].text;
 }
 if (i > 4 && i < 10) {
  question.innerText = MEDIUM_QUESTIONS[(i+1) % 5].text;
  qA.innerText = MEDIUM_QUESTIONS[(i+1) % 5].options[0].text;
  qB.innerText = MEDIUM_QUESTIONS[(i+1) % 5].options[1].text;
  qC.innerText = MEDIUM_QUESTIONS[(i+1) % 5].options[2].text;
  qD.innerText = MEDIUM_QUESTIONS[(i+1) % 5].options[3].text;
 }
 if (i > 9 && i < 15) {
  question.innerText = HARD_QUESTIONS[i % 10].text;
  qA.innerText = HARD_QUESTIONS[i % 10].options[0].text;
  qB.innerText = HARD_QUESTIONS[i % 10].options[1].text;
  qC.innerText = HARD_QUESTIONS[i % 10].options[2].text;
  qD.innerText = HARD_QUESTIONS[i % 10].options[3].text;
 }
 contMode = 0;
}
};

const isContinue = () => {
  contMode++;
 sumAmountCounter();
 if (i == 14) {
  alert("Вітаємо! Ви виграли " + amount);
  document.location.reload();
 }
 question.innerText = "Чи бажаете завершити гру?";
 qA.innerText = "";
 qB.innerText = "";
 qC.innerText = "";
 qD.innerText = "";
 YESbtn.onclick = update;
 NObtn.onclick = gameOverWithWin;
};

const gameOver = () => {
  alert("Кінець гри. Ваш виграш = " + amount);
  document.location.reload();
};

const gameOverWithWin = () => {
  if(contMode!=0){
    alert("Ваш виграш = " + sum);
    document.location.reload();
  }
};

const qAhandler = () => {
 if (i < 5) {
  if (EASY_QUESTIONS[i].options[0].isTrue) {
   qA.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qA.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (MEDIUM_QUESTIONS[(i + 1) % 5].options[0].isTrue) {
   qA.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qA.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (HARD_QUESTIONS[i % 10].options[0].isTrue) {
   qA.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qA.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const qBhandler = () => {
 if (i < 5) {
  if (EASY_QUESTIONS[i].options[1].isTrue) {
   qB.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qB.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (MEDIUM_QUESTIONS[(i + 1) % 5].options[1].isTrue) {
   qB.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qB.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (HARD_QUESTIONS[i % 10].options[1].isTrue) {
   qB.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qB.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const qChandler = () => {
 if (i < 5) {
  if (EASY_QUESTIONS[i].options[2].isTrue) {
   qC.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qC.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (MEDIUM_QUESTIONS[(i + 1) % 5].options[2].isTrue) {
   qC.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qC.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (HARD_QUESTIONS[i % 10].options[2].isTrue) {
   qC.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qC.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const qDhandler = () => {
 if (i < 5) {
  if (EASY_QUESTIONS[i].options[3].isTrue) {
   qD.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qD.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (MEDIUM_QUESTIONS[(i + 1) % 5].options[3].isTrue) {
   qD.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qD.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (HARD_QUESTIONS[i % 10].options[3].isTrue) {
   qD.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qD.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const help50handler = () => {
 help50.style.transition = "1s";
 help50.parentNode.removeChild(help50);
 let QUESTIONS;
 if (i < 5) {
  QUESTIONS = EASY_QUESTIONS[i];
 }
 if (i > 4 && i < 10) {
  QUESTIONS = MEDIUM_QUESTIONS[(i + 1) % 5];
 }
 if (i > 9 && i < 15) {
  QUESTIONS = HARD_QUESTIONS[i % 10];
 }
 let count = 0;
 let arr = [];
 while (count < 2) {
  let k = getRandomInt(4);
  if (!QUESTIONS.options[k].isTrue && !arr.includes(k)) {
   if (k == 0) qA.style.color = "transparent";
   if (k == 1) qB.style.color = "transparent";
   if (k == 2) qC.style.color = "transparent";
   if (k == 3) qD.style.color = "transparent";
   count++;
   arr.push(k);
  }
 }
};

const helpFriendhandler = () => {
 helpFriend.style.transition = "1s";
 helpFriend.parentNode.removeChild(helpFriend);
 let k = getRandomInt(4);
 if (k == 0) qA.style.color = "yellow";
 if (k == 1) qB.style.color = "yellow";
 if (k == 2) qC.style.color = "yellow";
 if (k == 3) qD.style.color = "yellow";
};

const helpMistakehandler = () => {
 helpMistake.style.transition = "1s";
 helpMistake.parentNode.removeChild(helpMistake);
 let QUESTIONS;
 if (i < 5) {
  QUESTIONS = EASY_QUESTIONS[i];
 }
 if (i > 4 && i < 10) {
  QUESTIONS = MEDIUM_QUESTIONS[(i + 1) % 5];
 }
 if (i > 9 && i < 15) {
  QUESTIONS = HARD_QUESTIONS[i % 10];
 }

 qA.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[0].isTrue) {
    qA.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qA.style.color = "red";
   }
  } else {
   qAhandler();
  }
 };
 qB.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[1].isTrue) {
    qB.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qB.style.color = "red";
   }
  } else {
   qBhandler();
  }
 };
 qC.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[2].isTrue) {
    qC.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qC.style.color = "red";
   }
  } else {
   qChandler();
  }
 };
 qD.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[3].isTrue) {
    qD.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qD.style.color = "red";
   }
  } else {
   qDhandler();
  }
 };
};

update();
qA.onclick = qAhandler;
qB.onclick = qBhandler;
qC.onclick = qChandler;
qD.onclick = qDhandler;
help50.onclick = help50handler;
helpFriend.onclick = helpFriendhandler;
helpMistake.onclick = helpMistakehandler;