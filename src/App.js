import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "New Desk Paper",
      amount: 94.12,
      date: new Date(2020, 1, 14),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 923.5,
      date: new Date(2021, 5, 24),
    },
    {
      id: 3,
      title: "New TV",
      amount: 150.66,
      date: new Date(2021, 7, 9),
    },
  ];

  return (
    <div>
      <h2>App js File (demo one)</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
