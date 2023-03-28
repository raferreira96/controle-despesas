import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="expense-item__price">R$ {props.amount}</div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
