import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
