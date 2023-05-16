const initialState = {
  todos: [],
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

export default reducer;
