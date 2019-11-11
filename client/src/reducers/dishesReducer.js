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





/* disovered / fixed repetitive code similar to start getting dishes request, had this one for index
and start getting dishes request for show, realized can use either for both actions
    ////////////////////////////////////////////////////////////////////////////
    case "LOADING_DISHES":
      return {
        ...state,
        loading: true
      }

*/