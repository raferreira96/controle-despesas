import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addYears = (date, years) => {
    date.setFullYear(date.getFullYear() + years);
    return date.toJSON().slice(0, 10);
  };

  let currentDate = new Date().toJSON().slice(0, 10);
  let maxYearDate = addYears(new Date(), 3);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      description: enteredDescription,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Descrição</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="R$ 0.00"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min={currentDate}
            max={maxYearDate}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Adicionar Despesa</button>
        <button type="button" onClick={props.onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
