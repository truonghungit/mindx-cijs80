import { useState } from "react";

const TransactionForm = (prop) => {
  const [showForm, setShowForm] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    amount: 0,
    date: "",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    setFormValue({
      ...formValue,
      [fieldName]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formValue.amount = parseFloat(formValue.amount);
    prop.onAddNew && prop.onAddNew(formValue);
  };

  return (
    <div className="card">
      <div className="card-body">
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formValue.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="amount" className="col-sm-2 col-form-label">
                Amount
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={formValue.amount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="date" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formValue.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="float-end pt-3">
              <button type="submit" className="btn btn-primary text-uppercase">
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn btn-secondary text-uppercase ms-3"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center p-4">
            <button
              className="btn btn-primary text-uppercase"
              onClick={() => setShowForm(true)}
            >
              Add new expense
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionForm;
