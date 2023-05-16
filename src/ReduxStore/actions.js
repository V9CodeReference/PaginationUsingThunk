export const fetchTodos = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  if (response.ok === true) {
    dispatch({
      type: "FETCH_TODOS_SUCCESS",
      payload: data,
    });
  }
};

export const setCurrentPage = (page) => async (dispatch) => {
  dispatch({
    type: "SET_CURRENT_PAGE",
    payload: page,
  });
};
