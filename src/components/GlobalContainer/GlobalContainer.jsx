import clsx from "clsx";
import css from "./GlobalContainer.module.css";

const GlobalContainer = ({ children, hero, footer, recall }) => {
  return (
    <div
      className={clsx(
        css.container,
        hero && css.heroContainer,
        footer && css.footerContainer,
        recall && css.recallContainer
      )}
    >
      {children}
    </div>
  );
};

export default GlobalContainer;
