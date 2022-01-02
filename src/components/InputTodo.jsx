import React from "react";

const inputAreaStyle = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

const InputTodo = (props) => {
  const { text, onChange, onClick } = props;

  return (
    <div style={inputAreaStyle}>
      <input placeholder="TODOを入力" value={text} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export { InputTodo };
