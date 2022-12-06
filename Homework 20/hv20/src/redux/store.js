import { createStore } from "redux";

const initialState = {
  todos: [
    {
     id: 1,
     title: "Бег",
     description: "Бегать 90 минут утром или вечером.",
     status: "Open",
     createDate: '2022.09.21',
     updateDate: '2022.09.21',
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
     createDate: '2022.09.21',
     updateDate: '2022.09.21',
    },
   ]
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {...state, todos: [...state.todos, {id: action.payload.id, title: action.payload.title, description: action.payload.description, status: "Open", createDate: action.payload.createDate, updateDate: action.payload.updateDate}]}
      default:
        return state;
    }
  }

  const store = createStore(reducer);