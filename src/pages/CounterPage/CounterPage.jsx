import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStartCounter } from "../../redux/counterSelectors";
import { DEC, INC } from "../../redux/counterSlice";

const CounterPage = () => {
  const dispatch = useDispatch();

  const startCounter = useSelector((state) => getStartCounter(state));

  const dec = () => dispatch(DEC());
  const inc = () => dispatch(INC());

  return (
    <>
      <button
        type="button"
        onClick={dec}
        style={{
          marginLeft: "20px",
          border: "none",
          width: "40px",
          height: "30px",
          color: "white",
          backgroundColor: "blue",
        }}
      >
        Dec
      </button>
      <span style={{ marginLeft: "10px", marginRight: "10px" }}>
        {startCounter}
      </span>
      <button
        type="button"
        onClick={inc}
        style={{
          border: "none",
          width: "40px",
          height: "30px",
          color: "white",
          backgroundColor: "blue",
        }}
      >
        Inc
      </button>
    </>
  );
};

export default CounterPage;
