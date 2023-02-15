import React, { useState } from "react";

const users = ["An", "Tung", "Tuan", "Linh"];

const data = users.map((user, index) => {
  const id = index;

  return {
    id,
    value: user,
  };
});

export const Users = () => {
  return (
    <>
      <h1>Danh sách Users</h1>

      {data.map((user, idx) => (
        <div key={idx}>
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <div>Email: {user.email}</div>
              <div>Company: {user.company.name}</div>
              <div>City: {user.address.city}</div>
            </div>
          </div>
          <div>Footer</div>
        </div>
      ))}
    </>
  );
};
