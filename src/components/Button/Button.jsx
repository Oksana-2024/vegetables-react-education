

import css from "./Button.module.css";
import { NavHashLink } from "react-router-hash-link";
const Button = ({ nameButton, link, openModal }) => {
  return (
    <>
    <NavHashLink to={link}  onClick={openModal} className={css.button}>{nameButton}</NavHashLink>
    </>
  );
};
export default Button;
