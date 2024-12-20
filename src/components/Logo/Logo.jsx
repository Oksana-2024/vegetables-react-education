import { BsGrid3X3GapFill } from "react-icons/bs";
import css from "./Logo.module.css";
import clsx from "clsx";

const Logo = ({ fill, footer }) => {
  return (
    <>
      <div className={clsx(css.logoContainer, footer && css.footerLogo)}>
        <a href="./" className={css.logo}>
          <BsGrid3X3GapFill
            className={clsx(fill && css.iconHeader)}
            size="16"
          />
          veggieboost
        </a>
      </div>
    </>
  );
};

export default Logo;
