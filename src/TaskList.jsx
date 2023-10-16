import React, { useState, useRef } from "react";
function TaskList(props) {
  const liRef = useRef(null);

  const handleListChange = () => {
    if (liRef.current) {
      liRef.current.classList.toggle("setTachado"); // Alterna la clase "tachado"
    }
  };
  return (
    <section className="tasks">
      <ul className="task-list">
        {props.datosParaLista.map((elemento, index) => (
          <li onClick={handleListChange} key={index} ref={liRef}>
            {elemento}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
