import css from "./GlobalContainer.module.css";

const GlobalContainer = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default GlobalContainer;
