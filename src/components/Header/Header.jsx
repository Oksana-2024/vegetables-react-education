import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
import css from "./Header.module.css";
//import clsx from "clsx";

const Header = () => {
  return (
    <>
      <Navigation header={true}/>
      <Logo fill={true} />
      <HiOutlineShoppingCart className={css.iconShop} size="24" />
      <CgMenuLeft />
    </>
  );
};

export default Header;
