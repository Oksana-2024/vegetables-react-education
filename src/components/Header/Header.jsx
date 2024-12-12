import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
import css from "./Header.module.css";
//import clsx from "clsx";

const Header = () => {
  return (
    <div className={css.containerHeader}>
      <Navigation header={true} navHeader={true} nav={true}/>
      <Logo fill={true} />
      <HiOutlineShoppingCart className={css.iconShop} size="20" />
      <CgMenuLeft className={css.iconMenu} />
    </div>
  );
};

export default Header;
