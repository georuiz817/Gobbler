const initialState = {
    dishes: [],
    main: "",
    side_one: "",
    side_two: "",
    drink: "",
  }


export default (state=initialState, action) => {
    switch(action.type) {    
      case "ADD_DISH":
        return {
          ...state,
          dishes: [...state.dishes, action.dish]
        }
        case "GET_DISHES":
          return {
            ...state,
            dishes: action.dishes,
        }

        case "LOADING_DISHES":
          return {
            ...state,
            }

        default:
          return state;
    }
}