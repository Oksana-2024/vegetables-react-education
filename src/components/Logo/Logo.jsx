import { BsGrid3X3GapFill } from "react-icons/bs";
import css from "./Logo.module.css";
import clsx from "clsx";

const Logo = ({ fill }) => {
  return (
    <>
      <div>
        <p className={css.logo}>
          <BsGrid3X3GapFill
            className={clsx(fill ? css.iconHeader : null)}
            size="16"
          />
          veggieboost
        </p>
      </div>
    </>
  );
};

export default Logo;
