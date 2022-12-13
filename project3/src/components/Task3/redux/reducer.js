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
   default:
    return state;
  }
 };
 

