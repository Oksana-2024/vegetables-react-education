import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
//import css from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <Logo />
      <Navigation header={false}/>
    </>
  );
};

export default Footer;
