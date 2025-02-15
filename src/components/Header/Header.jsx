import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
import css from "./Header.module.css";
import GlobalContainer from "../GlobalContainer/GlobalContainer";


const Header = ({ onMenu, openModal }) => {
  return (
    <header className={css.headerPage}>
      <GlobalContainer>
        <div className={css.containerHeader}>
          <Navigation header navHeader nav />
          <Logo className={css.iconHeader} />
          <HiOutlineShoppingCart
            className={css.iconShop}
            size="20"
            onClick={openModal}
          />
          <button className={css.buttonMenu} type="button" onClick={onMenu}>
            <CgMenuLeft className={css.iconMenu} />
          </button>
        </div>
      </GlobalContainer>
    </header>
  );
};

export default Header;
