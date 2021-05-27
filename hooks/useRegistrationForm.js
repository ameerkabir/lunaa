import { useState } from "react";

export const useRegistrationForm = (callback) => {
  const [values, setValues] = useState({});
  const handleSubmit = (event) => {
    console.log({event})
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleChange = (e) => {
    console.log({change: e})
    e.persist();
    return setValues((inputValues) => ({
      ...inputValues,
      [e.target.name]: e.target.value || e.target.checked,
    }));
  };
  const handleCheck = e => {
    e.persist();
    return setValues((inputValues) => ({
      ...inputValues,
      [e.target.name]:  e.target.checked,
    }));
  } 
  return {
    handleSubmit,
    handleChange,
    handleCheck,
    values,
  };
};
