import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { IoMdClose } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import css from "./MobileMenu.module.css";
import clsx from "clsx";

const MobileMenu = () => {
  return (
    <div className={clsx(css.mobileMenu, /* css.isOpen */)}>
      <div className={css.menuContainer}>
        <Logo fill={true} />
        <IoMdClose className={css.iconClose} size="24px" />
      </div>
      <Navigation navMenu={true} menu={true} nav={true}/>
      <div className={css.iconShopBox}>
        <HiOutlineShoppingCart className={css.iconShop} size="20px"/>
      </div>
    </div>
  );
};
export default MobileMenu;
