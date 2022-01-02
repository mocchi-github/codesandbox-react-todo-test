import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["done1", "done2"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button>完了</button>
                  <button>削除</button>
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
