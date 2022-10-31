import { useState } from "react";
import "../css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  return (
    <Card className="expenses">
      <ExpensesFilter
        value={filteredYear}
        onChange={(val) => setFilteredYear(val)}
      />
      <ExpensesList
        items={props.items.filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        )}
      />
    </Card>
  );
};

export default Expenses;
