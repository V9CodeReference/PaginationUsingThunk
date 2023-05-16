import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "./ReduxStore/actions";
import { setCurrentPage } from "./ReduxStore/actions";

import "./App.css";

const App = ({ todos, currentPage, fetchTodos, setCurrentPage }) => {
  const numOfTotalPages = Math.ceil(todos.length / 20);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const indexOfLastTodo = currentPage * numOfTotalPages;
  const indexOfFirstTodo = indexOfLastTodo - numOfTotalPages;
  const visualTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {visualTodos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      {pages.map((page) => (
        <span
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${currentPage === page ? "active" : ""}`}
        >
          {page} |{" "}
        </span>
      ))}
    </>
  );
};

const mapDispatchToProps = (state) => ({
  todos: state.todos,
  currentPage: state.currentPage,
});

export default connect(mapDispatchToProps, { fetchTodos, setCurrentPage })(App);
