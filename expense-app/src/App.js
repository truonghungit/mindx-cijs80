import logo from "./logo.svg";
import "./App.css";

import TransactionForm from "./Components/TransactionForm";
import Filter from "./Components/Filter";
import TransactionItem from "./Components/TransactionItem";
import { useEffect, useState } from "react";

const transactionsData = [
  {
    id: 1,
    name: "Mua Hoa",
    amount: 500000,
    date: "2023-02-14",
  },
  {
    id: 2,
    name: "Di ăn",
    amount: 500000,
    date: "2021-02-14",
  },
  {
    id: 3,
    name: "Cà phe",
    amount: 500000,
    date: "2022-02-14",
  },
];

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [displayData, setDisplayData] = useState(transactionsData);
  const [filterValue, setFilterValue] = useState("");

  const handleAddNewTransaction = (item) => {
    setTransactions([item, ...transactions]);
  };

  useEffect(() => {
    const data = transactions.filter((item) => {
      if (filterValue) {
        const date = new Date(item.date);
        return date.getFullYear() === +filterValue;
      }
      return item;
    });
    setDisplayData(data);
  }, [transactions, filterValue]);

  return (
    <div className="app-container">
      <TransactionForm onAddNew={handleAddNewTransaction} />

      <div className="card mt-4">
        <div className="card-body">
          <Filter onFilterChange={(value) => setFilterValue(value)} />

          {displayData.map((item) => (
            <TransactionItem
              key={item.id}
              date={item.date}
              name={item.name}
              amount={item.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
