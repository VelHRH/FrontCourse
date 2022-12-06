const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todooos: [
   {
    id: 1,
    title: "Бег",
    description: "Бегать 90 минут утром или вечером.",
    status: "Open",
    createDate: "2022.09.21",
    updateDate: "2022.09.21",
   },
   {
    id: 2,
    title: "Приготовить обд",
    description: "Приготовить обед на 5 человек.",
    status: "Open",
    createDate: "2022.10.21",
    updateDate: "2022.10.21",
   },
   {
    id: 3,
    title: "Сделать ДЗ",
    description: "Сделать математику, английский и программирование.",
    status: "Open",
    createDate: "2022.09.21",
    updateDate: "2022.09.21",
   },
   {
    id: 4,
    title: "Отправить письмо",
    description: "Отправить письмо в ответ другу.",
    status: "Open",
    createDate: "2022.09.21",
    updateDate: "2022.09.21",
   },
  ],
 };

 export const reducer = (state = initialState, action) => {
  switch (action.type) {
   case "ADD_TODO":
    return {
     ...state,
     todooos: state.todooos.concat({
      id: action.payload.id,
      title: action.payload.title,
      description: action.payload.description,
      status: "Open",
      createDate: action.payload.createDate,
      updateDate: action.payload.updateDate,
     }),
    };
   case "DELETE_TODO":
    return {
     ...state,
     todooos: state.todooos.filter((t) => t.id !== action.payload),
    };
   case "UPDATE_STATUS":
    return {
     ...state,
     todooos: state.todooos.map((todo, i) =>
      i === action.payload
       ? todo.status === "In Progress"
         ? { ...todo, status: "Done" }
         : todo.status === "Open"
         ? { ...todo, status: "In Progress" }
         : todo
       : todo
     ),
    };
    case "SET_VISIBILITY_FILTER":
      return {
        ...state,
        visibilityFilter: action.payload,
       };
   default:
    return state;
  }
 };
 

