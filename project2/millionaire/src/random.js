function isEmpty(str) {
  return !str.trim().length;
}

function getRandoms() {
  resRand.innerHTML = '';
  let minVal = parseInt(document.getElementById("begN").value);
  let maxVal = parseInt(document.getElementById("endN").value);
  let numb = parseInt(document.getElementById("numb").value);
  if (minVal > maxVal) {
    resRand.innerHTML = "Мінімальне значення більше максимального";
    return;
  }
  if (numb > maxVal - minVal +1) {
    resRand.innerHTML = "Неправильна кількість";
    return;
  }
  if (isNaN(minVal) || isNaN(maxVal)){
    resRand.innerHTML = "Введіть числa";
    return;
  }
  let i = 0;
  let resArr = [];
  while (i<numb){
    let k = Math.round(Math.random() * (maxVal - minVal) + minVal);
    let check = 0;
    for (let j = 0; j<resArr.length; j++){
      if (resArr[j] == k){
        check++;
        break;
      }
    }
    if (check==0) {
      resArr.push(k);
      i++;
    }
  }

  for (let j = 0; j<resArr.length; j++){
    resRand.innerHTML += `${resArr[j]}<br />`;
  }
}

OKbtn.onclick = getRandoms;
