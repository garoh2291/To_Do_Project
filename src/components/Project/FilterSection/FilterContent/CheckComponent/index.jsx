import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SearchMethod = ({ name }) => {
  return (
    <div>
      <input type="checkbox" name="byName" />
      <label htmlFor="byNAame">
        {name} <Example />
      </label>
    </div>
  );
};

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
