const initialState = {
    dishes: [],
    loading: false,
    currentDish: null
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
            loading: false,
          }
       ////////////////////////////////////////////////////////////////////////////
        case 'START_GETTING_DISHES_REQUEST':
          return {
            ...state,
            loading: true
          }
        ////////////////////////////////////////////////////////////////////////////
        case "GET_DISH":
            return {
              ...state,
              loading: false,
              currentDish: action.dish
            }
        ////////////////////////////////////////////////////////////////////////////
        default:
            return state;
    }
}




