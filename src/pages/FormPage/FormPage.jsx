import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_SELECT } from "../../redux/selectSlice";
import Select from "../../components/Select/Select";
import SelectList from "../../components/SelectList/SelectList";

const FormPage = () => {
  const dispatch = useDispatch();

  const [value, setTextSelect] = useState("");
  const handleChange = ({ target }) => setTextSelect(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      ADD_SELECT({
        itemSelect: { id: Date.now(), value },
      })
    );

    setTextSelect("");
  };

  const [isShow, setIsShow] = useState(false);
  const changeIsShow = () => setIsShow(!isShow);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ marginLeft: "20px", marginBottom: "8px" }}
      >
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="..."
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            border: "none",
            backgroundColor: "black",
            height: "22px",
            color: "white",
          }}
        >
          Add
        </button>
      </form>

      <Select />

      <button
        type="button"
        onClick={changeIsShow}
        style={{
          border: "none",
          backgroundColor: "black",
          height: "22px",
          color: "white",
        }}
      >
        {isShow ? "Close" : "Show"}
      </button>

      {isShow && <SelectList />}
    </>
  );
};

export default FormPage;
