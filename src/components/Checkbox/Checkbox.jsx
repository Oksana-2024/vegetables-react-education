import clsx from "clsx";
import { useId, useState } from "react";
import { FaCheck } from "react-icons/fa";
import s from "./Checkbox.module.css";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const inputId = useId()
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label htmlFor={inputId} className={s.label}>
        <span className={s.iconCkecked}>
          <FaCheck size={8} className={clsx(isChecked ? s.iconC : s.icon)} />
        </span>
      </label>
      <input
        type="checkbox"
        name="checkbox"
        id={inputId}
        className={s.visuallyHidden}
        value={isChecked}
        onChange={handleChange}
      />
    </>
  );
};
export default Checkbox;
