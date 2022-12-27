import { initialState } from "./data";

export const reducer = (state = initialState, action) => {
 switch (action.type) {
  case "ADD_IMAGE":
   return {
    ...state,
    cards: state.cards.concat({
     id: action.payload.id,
     link: action.payload.link,
     category: action.payload.category,
     views: 0,
    }),
   };
  case "INCREMENT_VIEW":
   return {
    ...state,
    cards: state.cards.map((card, i) =>
     i === action.payload.id ? { ...card, views: card.views + 1 } : card
    ),
   };
  default:
   return state;
 }
};
