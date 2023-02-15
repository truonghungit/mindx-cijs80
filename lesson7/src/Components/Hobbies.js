import React from "react";

export const Hobbies = () => {
  const [hobbies, setHobbies] = React.useState([
    {
      id: 0,
      hobby: "📷",
    },
    {
      id: 1,
      hobby: "🎹",
    },
  ]);

  const deleteHobby = (hobbyId) => {
    debugger;
    const updatedhobbies = hobbies.filter((item) => item.id !== hobbyId);
    setHobbies(updatedhobbies);
  };

  return (
    <div>
      <h1 className="mb-5">Rate your hobbies !</h1>
      {hobbies.map((item, index) => (
        <li key={index} className="row justify-content-start">
          {index} - {item.id}
          <div className="col-1">I</div>
          <div className="col-2">
            <select className="form-select">
              <option>likes</option>
              <option>loves</option>
            </select>
          </div>
          <div className="col-2">
            {item.hobby}
            <button className="btn" onClick={() => deleteHobby(item.id)}>
              X
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
