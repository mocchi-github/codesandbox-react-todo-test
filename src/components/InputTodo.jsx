import React from "react";

const InputTodo = (props) => {
  const { text, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={text} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export { InputTodo };
