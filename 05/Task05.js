import React, { useState } from "react";

const Task05 = () => {
  const [form, setForm] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form.minPrice, form.maxPrice);
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Task05</h1>
      <form onSubmit={submitHandler}>
        <label>
          podaj cenę min.:
          <input name="minPrice" value={form.minPrice} onChange={inputChange} />
        </label>
        <label>
          podaj cenę max.:
          <input name="maxPrice" value={form.maxPrice} onChange={inputChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Task05;
