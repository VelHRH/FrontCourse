let action=0;

let screen = document.getElementById('screen');
btn0.onclick = function () {
  screen.innerText += "0";
};
btn1.onclick = function () {
  screen.innerText += "1";
};
btn2.onclick = function () {
  screen.innerText += "2";
};
btn3.onclick = function () {
  screen.innerText += "3";
};
btn4.onclick = function () {
  screen.innerText += "4";
};
btn5.onclick = function () {
  screen.innerText += "5";
};
btn6.onclick = function () {
  screen.innerText += "6";
};
btn7.onclick = function () {
  screen.innerText += "7";
};
btn8.onclick = function () {
  screen.innerText += "8";
};
btn9.onclick = function () {
  screen.innerText += "9";
};
btnDot.onclick = function () {
  screen.innerText += ".";
};
btnPlus.onclick = function () {
  if(action==0){
    screen.innerText += "+";
    action++;
  }
  
};
btnMinus.onclick = function () {
  if(action==0){
  screen.innerText += "-";
  action++;}
};
btnMult.onclick = function () {
  if(action==0){
  screen.innerText += "*";
  action++;}
};
btnDiv.onclick = function () {
  if(action==0){
  screen.innerText += "/";
  action++;}
};
btnMod.onclick = function () {
  if(action==0){
  screen.innerText += "%";
  action++;}
};
btnC.onclick = function () {
  action=0;
  screen.innerText = "";
};

btnCE.onclick = function () {
  
  screen.innerText = screen.innerText.slice(0, -1);
  if (screen.innerText.indexOf("%")==-1 && screen.innerText.indexOf("*")==-1 && screen.innerText.indexOf("/")==-1 && screen.innerText.indexOf("+")==-1 && screen.innerText.indexOf("-")==-1)
  action = 0;
};

btnIs.onclick = function (){
  action=0;
  let n1, n2;
  if (screen.innerText.indexOf("..") != -1 || screen.innerText.indexOf(".*") != -1 || screen.innerText.indexOf("*.") != -1 || screen.innerText.indexOf(".+") != -1 || screen.innerText.indexOf("+.") != -1 || screen.innerText.indexOf("-.") != -1 || screen.innerText.indexOf(".-") != -1 || screen.innerText.indexOf("/.") != -1 || screen.innerText.indexOf("./") != -1 || screen.innerText.indexOf("%.") != -1 || screen.innerText.indexOf(".%") != -1){
    screen.innerText = "err";
    return;
  }
  if (screen.innerText.indexOf("%")!=-1){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("%"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("%")+1);
    screen.innerText = parseFloat(n1) * parseFloat(n2) / 100;
  }
  if (screen.innerText.indexOf("*")!=-1){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("*"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("*")+1);
    if ((n1.indexOf(".")!=-1) && n2.indexOf(".")!=-1){
      let count1 = (n1.length - n1.indexOf(".")) + (n2.length - n2.indexOf(".") -2);
      screen.innerText = (parseFloat(n1) * parseFloat(n2)).toFixed(count1);
    }
    else{
      screen.innerText = parseFloat(n1) * parseFloat(n2);
    }
    
  }
  if (screen.innerText.indexOf("+")!=-1){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("+"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("+")+1);
    if ((n1.indexOf(".")!=-1) && n2.indexOf(".")!=-1){
      let count1 = (n1.length - n1.indexOf(".") - 1);
      screen.innerText = (parseFloat(n1) * parseFloat(n2)).toFixed(count1);
    }
    else{
      screen.innerText = parseFloat(n1) * parseFloat(n2);
    }
    screen.innerText = ((parseFloat(n1)*10) + (parseFloat(n2)*10))/10;
  }
  if (screen.innerText.indexOf("-")!=-1){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("-"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("-")+1);
    screen.innerText = parseFloat(n1) - parseFloat(n2);
  }
  if (screen.innerText.indexOf("/")!=-1){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("/"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("/")+1);
    if (n2=="0"){
      screen.innerText = "err"
    }
    else{
      screen.innerText = parseFloat(n1) / parseFloat(n2);
    }
  }
}
