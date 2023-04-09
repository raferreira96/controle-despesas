import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [descriptionIsValid, setDescriptionIsValid] = useState(true);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);

  const addYears = (date, years) => {
    date.setFullYear(date.getFullYear() + years);
    return date.toJSON().slice(0, 10);
  };

  let currentDate = new Date().toJSON().slice(0, 10);
  let maxYearDate = addYears(new Date(), 3);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTitleIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDescriptionIsValid(true);
    }
    setEnteredDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAmountIsValid(true);
    }
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDateIsValid(true);
    }
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      return;
    }
    if (enteredDescription.trim().length === 0) {
      setDescriptionIsValid(false);
      return;
    }
    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }
    if (enteredDate.trim().length === 0) {
      setDateIsValid(false);
      return;
    }

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
        <div
          className={`new-expense__control ${!titleIsValid ? "invalid" : ""}`}
        >
          <label>Título *</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div
          className={`new-expense__control ${
            !descriptionIsValid ? "invalid" : ""
          }`}
        >
          <label>Descrição *</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div
          className={`new-expense__control ${!amountIsValid ? "invalid" : ""}`}
        >
          <label>Valor *</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="R$ 0.00"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div
          className={`new-expense__control ${!dateIsValid ? "invalid" : ""}`}
        >
          <label>Data *</label>
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
