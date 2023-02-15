export const NameCard = (props) => {
  const handleClick = (event) => {
    console.log("handleClick", props);
    props.onIncreaseAge("Data from NameCard component");
  };

  return (
    <div className="card border-primary">
      <div className="card-body">
        Hello, my name is {props.name}, I'm {props.age} years old
      </div>

      <button className="btn btn-primary" onClick={handleClick}>
        Increase age
      </button>
    </div>
  );
};
