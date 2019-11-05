const baseUrl = 'http://localhost:3001'

export const addDish = (dish) => {
    return dispatch => {
      return fetch(baseUrl + '/dishes', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dish })
      })
      .then(resp => resp.json())
      .then(dish => {
        dispatch({ type: "ADD_DISH", dish })
       })
    }
  } 

  export const indexDishes = () => {
    return dispatch => {
      return fetch(baseUrl + '/dishes')
        .then(resp => resp.json())
        .then(dishes => {
          return dispatch({ type: 'INDEX_DISHES', dishes })
        })
    }
  }
  
