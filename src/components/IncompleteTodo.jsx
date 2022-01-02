import React from "react";

const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button
                  onClick={() => {
                    onClickComplete(idx);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDelete(idx);
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
  );
};

export { IncompleteTodo };
