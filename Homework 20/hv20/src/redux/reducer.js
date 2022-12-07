import { initialState } from "./data";

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
      isEditing: false
     }),
    };
   case "DELETE_TODO":
    return {
     ...state,
     todooos: state.todooos.filter((t) => t.id !== action.payload),
    };
    case "SORT_ADD":
    return {
     ...state,
     todooos: state.todooos.slice().sort(
      (a, b) =>
       new Date(...a.createDate.split(".").reverse()) -
       new Date(...b.createDate.split(".").reverse())
     ),
    };
    case "SORT_EDIT":
    return {
     ...state,
     todooos: state.todooos.slice().sort(
      (a, b) =>
       new Date(...a.updateDate.split(".").reverse()) -
       new Date(...b.updateDate.split(".").reverse())
     ),
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
    case "START_EDITING":
    return {
     ...state,
     todooos: state.todooos.map((todo, i) =>
      i === action.payload ? { ...todo, isEditing: true } : todo
     ),
    };
    case "END_EDITING":
    return {
     ...state,
     todooos: state.todooos.map((todo, i) =>
      i === action.payload.id ? { ...todo, isEditing: false, title:action.payload.title, updateDate: action.payload.date} : todo
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
 

