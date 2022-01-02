import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (evevt) => {
    setTodoText(evevt.target.value);
  };
  const onClickAddButton = () => {
    if (!todoText) {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickCompleteButton = (index) => {
    // 未完了リストから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了済みリストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickDeleteButton = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickReturnButton = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        text={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddButton}
      />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, idx) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button
                    onClick={() => {
                      onClickCompleteButton(idx);
                    }}
                  >
                    完了
                  </button>
                  <button
                    onClick={() => {
                      onClickDeleteButton(idx);
                    }}
                  >
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了済のTODO</p>
        <ul>
          {completeTodos.map((todo, idx) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button
                    onClick={() => {
                      onClickReturnButton(idx);
                    }}
                  >
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { App };
