import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import StateAny from "../state__any/StateAny";
import StateObj from "../state__obj/StateObj";
import StateSlice from "../state__slice/StateSlice";
import "./Form.css";

const Form = () => {
  return (
    <div>
        <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/homework-state-any" element={<StateAny />} />
          <Route path="/homework-state-slice" element={<StateSlice />} />
          <Route path="/homework-state-obj" element={<StateObj />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Form;
