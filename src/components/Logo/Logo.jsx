import { BsGrid3X3GapFill } from "react-icons/bs";
import css from "./Logo.module.css";
import clsx from "clsx";

const Logo = ({ footer, className }) => {
  return (
    <>
      <div className={clsx(css.logoContainer, footer && css.footerLogo)}>
        <BsGrid3X3GapFill className={className} size="16" />
        veggieboost
      </div>
    </>
  );
};

export default Logo;
