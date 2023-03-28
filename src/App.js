import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e2",
    title: "Carro",
    description: "Um carro qualquer.",
    amount: 199.99,
    date: new Date(2023, 2, 15),
  },
  {
    id: "e1",
    title: "Bolsa",
    description: "Uma bolsa qualquer.",
    amount: 135.99,
    date: new Date(2023, 1, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
