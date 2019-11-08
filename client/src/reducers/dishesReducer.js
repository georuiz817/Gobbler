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
      case "LOADING_DISHES":
        return {
          ...state,
          loading: true
        }
        ////////////////////////////////////////////////////////////////////////////
        case 'START_GETTING_DISHES_REQUEST':
          return {
            ...state,
            dishes: [...state.dishes],
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
        case "DELETE_DISH":
          return{
            dishes: state.dishes.filter(dish => dish.id !== action.payload)
          }
        
       ////////////////////////////////////////////////////////////////////////////
        default:
          return state;
    }
}
