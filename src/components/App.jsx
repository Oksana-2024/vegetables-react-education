import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useState } from "react";
import Modal from "./Modal/Modal";
import SectionHero from "./SectionHero/SectionHero";
import SectionVegetables from "./SectionVegetables/SectionVegetables";
import SectionEasySteps from "./SectionEasySteps/SectionEasySteps";
import SectionDiscount from "./SectionDiscount/SectionDiscount";
import SectionOrganic from "./SectionOrganic/SectionOrganic";
import SectionDelivery from "./SectionDelivery/SectionDelivery";
import SectionRecall from "./SectionRecall/SectionRecall";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuToggle = () => setMobileMenu(!mobileMenu);
  return (
    <>
      <Header onMenu={mobileMenuToggle} />
      <main>
        <SectionHero />
        <SectionVegetables />
        <SectionEasySteps />
        <SectionDiscount />
        <SectionOrganic />
        <SectionDelivery />
        <SectionRecall />
      </main>
      <Footer />
      <MobileMenu open={mobileMenu} onMenu={mobileMenuToggle} />
      <Modal />
    </>
  );
};
export default App;
