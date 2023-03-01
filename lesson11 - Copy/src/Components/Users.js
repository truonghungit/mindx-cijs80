import { useState, useEffect } from "react";

export function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const hasData = localStorage.getItem("hasData");

  // if (!hasData) {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       localStorage.setItem("hasData", true);
  //       setUsers(data);
  //     });
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("useEffects data", data);
        setUsers(data);
      });
  }, [name, email]);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setName("a")}>
        Name - {name}
      </button>
      <button className="btn btn-primary" onClick={() => setEmail("abc")}>
        Email - {email}
      </button>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
