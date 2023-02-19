import logo from "./logo.svg";
import "./App.css";

import Filter from "./Components/Filter";
import ExpenseChart from "./Components/ExpenseChart";
import TransactionItem from "./Components/TransactionItem";
import TransactionForm from "./Components/TransactionForm";

import { useEffect, useState } from "react";

const language = {
  vi: {
    login: "Đăng nhập",
    username: "Tên đăng nhập",
    required: "Không được bỏ trống",
  },
  en: {
    login: "Login",
    username: "username",
    required: "This field is required",
  },
  fr: {
    login: "logggin",
    username: "username",
    required: "This field is required",
  },
};

const transactionsData = [
  {
    id: 13,
    name: "T 5",
    amount: 1000000,
    date: "2023-05-14",
  },
  {
    id: 12,
    name: "T 5",
    amount: 500000,
    date: "2023-05-14",
  },
  {
    id: 10,
    name: "T 3",
    amount: 500000,
    date: "2023-03-14",
  },
  {
    id: 11,
    name: "T 3",
    amount: 500000,
    date: "2023-03-14",
  },
  {
    id: 1,
    name: "Mua Hoa",
    amount: 500000,
    date: "2023-02-14",
  },
  {
    id: 4,
    name: "An choi",
    amount: 1000000,
    date: "2023-01-10",
  },
  {
    id: 5,
    name: "Di ve que",
    amount: 1000000,
    date: "2023-01-20",
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
  {
    id: 6,
    name: "thang 5",
    amount: 500000,
    date: "2022-05-14",
  },
  {
    id: 7,
    name: "thang 6",
    amount: 500000,
    date: "2022-06-14",
  },
  {
    id: 8,
    name: "thang 6",
    amount: 100000,
    date: "2022-06-14",
  },
  {
    id: 9,
    name: "thang 9",
    amount: 200000,
    date: "2022-09-14",
  },
];

function App() {
  const [transactions, setTransactions] = useState(() => {
    const rawData = localStorage.getItem("transactions");
    if (rawData) {
      return JSON.parse(rawData);
    }

    return transactionsData;
  });
  const [displayData, setDisplayData] = useState(transactionsData);
  const [filterValue, setFilterValue] = useState(new Date().getFullYear());

  const handleAddNewTransaction = (item) => {
    setTransactions([
      { ...item, id: transactions.length + 2 },
      ...transactions,
    ]);
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

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="app-container">
      <TransactionForm onAddNew={handleAddNewTransaction} />

      <div className="card mt-4">
        <div className="card-body">
          <Filter onFilterChange={(value) => setFilterValue(value)} />

          <ExpenseChart data={displayData} />

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
