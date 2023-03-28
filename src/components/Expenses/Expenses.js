import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  let currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(currentYear.toString());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const distinctYears = [
    ...new Set(props.items.map((expense) => expense.date.getFullYear())),
  ];

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          options={distinctYears}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
