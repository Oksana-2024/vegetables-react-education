import clsx from "clsx";
import css from "./GlobalContainer.module.css";

const GlobalContainer = ({ children, hero, footer }) => {
  return <div className={clsx(css.container, hero && css.heroContainer, footer && css.footerContainer)}>{children}</div>;
};

export default GlobalContainer;
