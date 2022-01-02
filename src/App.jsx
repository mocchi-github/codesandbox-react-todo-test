import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["done1", "done2"]);

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAddButton}>追加</button>
      </div>
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
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button>戻す</button>
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
