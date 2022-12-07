import React, { useState } from "react";
import "./StateSlice.css";

const StateSlice = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const changeValueName = (e) => {
    setName(e.target.value);
  };
  const changeValueAge = (e) => {
    setAge(e.target.value);
  };
  const changeValueId = (e) => {
    setId(e.target.value);
  };

  const sendData = () => {
    const data = {
      name: name,
      age: age,
      id: id,
    };
    console.log(data);
  };

  return (
    <div className="StateSlice">
      <div className="name__with__input">
        <label htmlFor="">Name</label>
        <input type="text" id="name" value={name} onChange={changeValueName} />
      </div>
      <div className="age__with__input">
        <label htmlFor="">Age</label>
        <input type="text" id="age" value={age} onChange={changeValueAge} />
      </div>
      <div className="id__with__input">
        <label htmlFor="">Id</label>
        <input type="text" id="id" value={id} onChange={changeValueId} />
      </div>
      <button className="SendBtn" onClick={sendData}>
        Send Data
      </button>
    </div>
  );
};

export default StateSlice;
