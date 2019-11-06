const initialState = {
    dishes: [],
   
  }


export default (state=initialState, action) => {
    switch(action.type) {    
      case "ADD_DISH":
        return {
          ...state,
          dishes: [...state.dishes, action.dish]
        }
      ////////////////////////////////////////////////////////////////////////////
        case "GET_DISHES":
          return {
            ...state,
            dishes: action.dishes,
        }
      ////////////////////////////////////////////////////////////////////////////
        default:
          return state;
    }
}
