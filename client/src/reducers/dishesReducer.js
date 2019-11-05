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
  
      default:
        return state;
    }
}