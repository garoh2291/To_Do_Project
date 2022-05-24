import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SearchMethod = ({ name, type, getTasks }) => {
  const checkBoxHandle = (e) => {
    const { checked } = e.target;
    if (checked) {
      getTasks({
        queryRoute: type,
        queryValue: name,
      });
    } else {
      getTasks({
        queryRoute: type,
        queryValue: "",
      });
    }
  };
  return (
    <div>
      <input type="checkbox" name="byName" onChange={checkBoxHandle} />
      <label htmlFor="byNAame">{name}</label>
    </div>
  );
};

// const Example = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   console.log(startDate);
//   console.log(
//     `${startDate.getFullYear()}-${
//       startDate.getMonth() + 1
//     }-${startDate.getDate()}`
//   );
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };
