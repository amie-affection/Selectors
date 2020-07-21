import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_SELECT, CHANGE_SELECT } from "../../redux/selectSlice";

const SelectListItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteSelect = () => dispatch(DELETE_SELECT({ id: item.id }));

  const [value, setValue] = useState("");
  const handleChange = ({ target }) => setValue(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CHANGE_SELECT({ id: item.id, value: value }));

    setValue("");
  };

  return (
    <li>
      <h3 style={{ display: "inline-block", marginRight: "10px" }}>
        {item.value}
      </h3>
      <button
        type="button"
        onClick={deleteSelect}
        style={{
          border: "none",
          height: "22px",
          color: "white",
          backgroundColor: "red",
        }}
      >
        Delete
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          style={{ width: "50px", marginRight: "10px" }}
        />
        <button
          type="submit"
          style={{
            border: "none",
            height: "23px",
            width: "40px",
            backgroundColor: "yellow",
          }}
        >
          Edit
        </button>
      </form>
    </li>
  );
};

export default SelectListItem;
