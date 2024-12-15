import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { IoMdClose } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import css from "./MobileMenu.module.css";
import clsx from "clsx";

const MobileMenu = ({ open, onMenu }) => {
  return (
    <div className={clsx(css.mobileMenu, open ? css.isOpen : null)}>
      <div className={css.menuContainer}>
        <Logo fill={true} />
        <button onClick={onMenu}>
          <IoMdClose className={css.iconClose} size="24px" />
        </button>
      </div>
      <Navigation navMenu={true} menu={true} />
      <div className={css.iconShopBox}>
        <HiOutlineShoppingCart className={css.iconShop} size="20px" />
      </div>
    </div>
  );
};
export default MobileMenu;
