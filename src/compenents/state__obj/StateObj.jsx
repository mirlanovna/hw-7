import React, { useState } from "react";
import "./StateObj.css";

const StateObj = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    id: "",
  });

  const changeValue = (key) => {
    return (e) => {
      setData((prevData) => ({
        ...prevData,
        [key]: e.target.value,
      }));
    };
  };

  const sendData = () => {
    const aboutUser = {
      name: data.name,
      age: data.age,
      id: data.id,
    };
    console.log(aboutUser);
  };

  return (
    <div className="StateObj">
      <div className="name__with__input">
        <label htmlFor="">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={changeValue("name")}
        />
      </div>
      <div className="age__with__input">
        <label htmlFor="">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          value={data.age}
          onChange={changeValue("age")}
        />
      </div>
      <div className="id__with__input">
        <label htmlFor="">Id</label>
        <input
          type="text"
          id="id"
          name="id"
          value={data.id}
          onChange={changeValue("id")}
        />
      </div>
      <button className="SendBtn" onClick={sendData}>
        Send Data
      </button>
    </div>
  );
};

export default StateObj;
