import React, { useState } from "react";
import "./StateAny.css";

const StateAny = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    id: "",
  });

  const changeInputValuesName = (e) => {
    setState((prev) => ({ ...prev, name: e.target.value }));
  };
  const changeInputValuesAge = (e) => {
    setState((prev) => ({ ...prev, age: e.target.value }));
  };
  const changeInputValuesId = (e) => {
    setState((prev) => ({ ...prev, id: e.target.value }));
  };

  const sendData = () => {
    const userData = {
      name: state.name,
      age: state.age,
      id: state.id,
    };
    console.log(userData);
    setState({ name: "", age: "", id: "" });
  };

  return (
    <>
      <div className="StateAny">
        <div className="name__with__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={changeInputValuesName}
          />
        </div>
        <div className="age__with__input">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={state.age}
            onChange={changeInputValuesAge}
          />
        </div>
        <div className="id__with__input">
          <label htmlFor="id">Id</label>
          <input
            type="text"
            name="id"
            id="id"
            value={state.id}
            onChange={changeInputValuesId}
          />
        </div>
        <button className="SendBtn" onClick={sendData}>
          Send Data
        </button>
      </div>
    </>
  );
};

export default StateAny;
