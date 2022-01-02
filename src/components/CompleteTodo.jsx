import React from "react";

const CompleteTodo = (props) => {
  const { todos, onClickReturn } = props;

  return (
    <div className="complete-area">
      <p className="title">完了済のTODO</p>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button
                  onClick={() => {
                    onClickReturn(idx);
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
  );
};

export { CompleteTodo };
