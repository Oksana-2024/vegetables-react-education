import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Social from "../Social/Social";
import css from "./Footer.module.css";
import img from "../../assets/images/vegetables_footer.png"
//import css from "./Footer.module.css";

const Footer = () => {
  return (
    <>
    <img className={css.img} src={img} alt="Broccoli" width={335} height={172} />
      <Logo />
      <Navigation navFooter={true} footer={true} />
     <Social/>
      <address className={css.address} id="contacts">
        <a href="tel:+380684439426">+380 (68) 443-94-26</a>
        <br />
        1678 S. Pioneer Road <br /> Salt Lake City <br /> UT 84104
      </address>
    </>
  );
};

export default Footer;
