function currencyFormat(num) {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

const TransactionItem = (prop) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>{prop.date}</div>
            <div className="ms-3">{prop.name}</div>
          </div>
          <div>{currencyFormat(prop.amount)}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
