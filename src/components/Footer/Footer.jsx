import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Social from "../Social/Social";
import css from "./Footer.module.css";
import img from "../../assets/images/vegetables_footer.png";
import GlobalContainer from "../GlobalContainer/GlobalContainer";


const Footer = () => {
  return (
    <footer className={css.footerPage}>
      <GlobalContainer className={css.footerContainer}>
       <div className={css.navBox}>
          <div>
            <img
              className={css.img}
              src={img}
              alt="Broccoli"
              width={335}
              height={172}
            />
            <Logo footer/>
          </div>
          <Navigation navFooter footer/>
       </div>
        <div className={css.addressBox}>
          <Social />
          <address className={css.address}>
            <a href="tel:+380684439426">+380 (68) 443-94-26</a>
            <br />
            1678 S. Pioneer Road <br /> Salt Lake City <br /> UT 84104
          </address>
        </div>
      </GlobalContainer>
    </footer>
  );
};

export default Footer;
