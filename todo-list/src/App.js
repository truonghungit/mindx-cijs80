import logo from "./logo.svg";
import { useEffect, useState } from "react";

import "./App.css";

/**
 {
  id: 1,
  title: "task name",
  isCompleted: true,
 }
 */

function handleResponse(res) {
  console.log("response ", res.json());
}

fetch("https://jsonplaceholder.typicode.com/users").then(handleResponse);

// callback function là 1 function

// Arrow function

function sayHello(person) {
  console.log("Hello", person);
}
// ES6 2015
// => Arrow function

const sayHelloArrow = (person) => {
  console.log("Hello", person);
};

[1, 2, 3].map(function (item) {
  return item * 2;
});

[1, 2, 3].map((item) => {
  return { num: item };
});

// context lúc function được thực thi
// this

const saveToLocalStorage = (items) => {
  localStorage.setItem("TODO_ITEMS", JSON.stringify(items));
};

const getTodoItemsFromLocalStorage = () => {
  const rawData = localStorage.getItem("TODO_ITEMS");

  if (!rawData) {
    return [];
  }

  return JSON.parse(rawData);
};

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [todoItems, setTodoItems] = useState(() => {
    return getTodoItemsFromLocalStorage();
  });

  const handleKeyUp = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const task = {
      id: todoItems.length + 2,
      title: newTitle,
      isCompleted: false,
    };

    setTodoItems([task, ...todoItems]);
    setNewTitle("");
  };

  const toggleCompleteTask = (task) => {
    const mapFn = (item) => item.id === task.id;
    const index = todoItems.findIndex(mapFn);

    if (index >= 0) {
      todoItems[index].isCompleted = !task.isCompleted;
    }

    setTodoItems([...todoItems]);
  };

  const deleteTask = (id) => {
    const updatedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems([...updatedItems]);
  };

  useEffect(() => {
    saveToLocalStorage(todoItems);
  }, [todoItems]);

  return (
    <div className="todo-app">
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="What needs to be done?"
        />
      </header>

      <div className="main">
        <div className="todo-list">
          {todoItems &&
            todoItems.map((item) => (
              <div
                key={item.id}
                className={`todo-item ${item.isCompleted ? "completed" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => toggleCompleteTask(item)}
                />
                <label>{item.title}</label>
                <button
                  onClick={() => deleteTask(item.id)}
                  type="button"
                ></button>
              </div>
            ))}
        </div>
      </div>

      <div className="footer">
        <span className="todo-count">
          <strong>{todoItems.length}</strong> items
        </span>
        <ul className="filters">
          <li className="selected">All</li>
          <li>Active</li>
          <li>Completed</li>
          <button className="clear-completed">Clear Completed</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
