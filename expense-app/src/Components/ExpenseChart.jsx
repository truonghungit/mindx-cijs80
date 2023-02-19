export default function ExpenseChart({ data }) {
  console.log("data ", data);
  const expenses = [];

  for (let i = 0; i < 12; i++) {
    const items = data.filter((item) => {
      const itemMonth = new Date(item.date).getMonth();
      return itemMonth === i;
    });

    const totalOfMonth = items.reduce((total, item) => total + item.amount, 0);
    expenses.push(totalOfMonth);
  }

  const maxExpense = Math.max(...expenses);
  const chartData = expenses.map((item) => {
    return (item / maxExpense) * 100;
  });

  console.log("chartData", chartData);

  return (
    <div className="d-flex py-4 chart-container">
      {chartData.map((item, index) => (
        <div key={index} className="chart-item">
          <div
            style={{
              position: "absolute",
              bottom: "-25px",
              left: 0,
            }}
          >
            {`T ${index + 1}`}
          </div>
          <div
            className="chart-item-inner"
            style={{
              height: `${item}%`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
