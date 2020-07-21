import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getSelectList } from "../../redux/selectSelectors";

const Select = () => {
  const selectList = useSelector((state) => {
    console.log(state.selectSlice.selectList);
    return getSelectList(state);
  });

  const [selectValue, setSelectValue] = useState("");
  const handleChange = ({ target }) => setSelectValue(target.value);

  console.log(selectValue);

  return (
    <select
      style={{ marginLeft: "20px", marginRight: "8px", height: "22px" }}
      name="selectMy"
      value={selectValue}
      onChange={handleChange}
    >
      <option value="" disabled>
        ...
      </option>

      {selectList.map((item) => {
        console.log(item);
        return (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
