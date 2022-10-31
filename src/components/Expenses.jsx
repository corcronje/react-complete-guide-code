import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  return (
    <Card className="expenses">
      <ExpensesFilter
        value={filteredYear}
        onChange={(val) => setFilteredYear(val)}
      />
      {props.items
        .filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        )
        .map((expense) => (
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
