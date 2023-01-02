const initialState = {res: []}

export const resReducer = (state = initialState, action) => {
  switch (action.type){
    case "FILL_RESULTS":
      return {
        ...state,
        res: action.payload
      }
    default:
      return state
  }
};