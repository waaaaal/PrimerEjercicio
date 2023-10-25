import React, { useState } from "react";


interface TaskFormProp{
  createTask: (input: string) => void;

}

function TaskForm({ createTask }:TaskFormProp): JSX.Element{
  const [inputText, setInputText] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) : void=> {
    const text = e.target.value;
    setInputText(text);
    if (text.length < 4) {
      setIsButtonDisabled(true);
      return;
    }
    setIsButtonDisabled(false);
  };

  const handleButtonChange = (): void => {
    createTask(inputText);

    setInputText("");
  };

  return (
    <>
      <form className="task-form">
        <fieldset>
          <legend>Formulario</legend>
          <label htmlFor="taskInput">Escribe tu tarea</label>
          <input
            type="text"
            id="taskInput"
            value={inputText}
            placeholder="Dime cosas"
            className="task-box"
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="button"
            disabled={isButtonDisabled}
            onClick={handleButtonChange}
          >
            Enviar
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default TaskForm;
