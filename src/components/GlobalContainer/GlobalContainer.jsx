import clsx from "clsx";
import css from "./GlobalContainer.module.css";

const GlobalContainer = ({ children, className}) => {
  return (
    <div
      className={clsx(
        css.container,
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlobalContainer;
