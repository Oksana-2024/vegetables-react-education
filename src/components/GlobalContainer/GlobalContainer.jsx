import clsx from "clsx";
import css from "./GlobalContainer.module.css";

const GlobalContainer = ({ children, hero }) => {
  return <div className={clsx(css.container, hero && css.heroContainer)}>{children}</div>;
};

export default GlobalContainer;
