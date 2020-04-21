//initial state, it is not mutable, will always remain the same.
//We can keep creating new state objects with our reducer which will have a never ending 
//spread operator of new and new state objects that will be saved 
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
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case "GET_DISHES":
          return {
            ...state,
            dishes: action.dishes,
            loading: false,
          }
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 'START_GETTING_DISHES_REQUEST':
          return {
            ...state,
            loading: true
          }
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case "GET_DISH":
            return {
              ...state,
              loading: false,
              currentDish: action.dish
            }
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case 'INCREASE_LIKES':
          return{
                ...state,
                dishes: state.dishes.map(dish => {
                    return dish.id === action.dish.id ? action.dish : dish
                })
            }
       ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        default:
            return state;
    }
}




