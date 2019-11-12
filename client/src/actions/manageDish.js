const baseUrl = 'http://localhost:3001'
////////////////////////////////////////////////////////////////////////////
export const addDish = (dish,history) => {
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
        history.push('/dishesIndex')
       })
    }
  } 
////////////////////////////////////////////////////////////////////////////
export function getDishes() {
  return (dispatch) => {
    dispatch({ type: 'START_GETTING_DISHES_REQUEST' });
     fetch(baseUrl + '/dishes')
      .then(response => response.json())
      .then(dishes => dispatch({ type: 'GET_DISHES', dishes}));
  };
}
////////////////////////////////////////////////////////////////////////////
export const getDish = id => {
  return dispatch => {
    dispatch({ type: "START_GETTING_DISHES_REQUEST" });
    return fetch(baseUrl + '/dishes/' + id)
      .then(resp => resp.json())
      .then( dish => dispatch({ type: "GET_DISH", dish }))
  }
}
////////////////////////////////////////////////////////////////////////////


/*
Mock delete function, not working properly

export const deleteDish = id => {
  return dispatch => {
    return fetch (baseUrl + '/dishes/' + id, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
   })
   .then(resp => resp.json())
   .then(() => {
      dispatch({type: "DELETE_DISH", id})
     
   })
 }
}   
*/
