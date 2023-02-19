const Filter = (prop) => {
  return (
    <div className="d-flex justify-content-between py-2">
      <div>Filter by year</div>
      <div>
        <select
          className="form-select"
          onChange={(event) => prop.onFilterChange(event.target.value)}
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
