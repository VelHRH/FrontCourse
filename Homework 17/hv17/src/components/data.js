export function getCurrentDate(separator='.'){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }

 export const data = [
  {
   id: 1,
   title: "Бег",
   description: "Бегать 90 минут утром или вечером.",
   status: "Open",
   createDate: getCurrentDate(),
   updateDate: getCurrentDate(),
  },
  {
   id: 2,
   title: "Приготовить обед",
   description: "Приготовить обед на 5 человек.",
   status: "Open",
   createDate: '2022.10.21',
   updateDate: '2022.10.21',
  },
  {
   id: 3,
   title: "Сделать ДЗ",
   description: "Сделать математику, английский и программирование.",
   status: "Open",
   createDate: '2022.09.21',
   updateDate: '2022.09.21',
  },
  {
   id: 4,
   title: "Отправить письмо",
   description: "Отправить письмо в ответ другу.",
   status: "Open",
   createDate: getCurrentDate(),
   updateDate: getCurrentDate(),
  },
 ];