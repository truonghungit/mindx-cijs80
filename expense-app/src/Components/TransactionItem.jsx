import { useState } from "react";

const TransactionItem = (prop) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>{prop.date}</div>
            <div className="ms-3">{prop.name}</div>
          </div>
          <div>{prop.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
