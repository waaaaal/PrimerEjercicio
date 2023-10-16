import React, { useState, useRef } from "react";
function TaskList(props) {
  const liReference = useRef(null);

  const handleListChange = () => {
    if (liReference.current) {
      liReference.current.classList.toggle("setLineThrough");
    }
  };
  return (
    <section className="tasks">
      <ul className="task-list">
        {props.datosParaLista.map((elemento, index) => (
          <li onClick={handleListChange} key={index} ref={liReference}>
            {elemento}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
