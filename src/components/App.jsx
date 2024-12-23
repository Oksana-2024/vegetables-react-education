import { useState } from "react";
import Header from "./Header/Header";
import SectionHero from "./SectionHero/SectionHero";
import SectionVegetables from "./SectionVegetables/SectionVegetables";
import SectionEasySteps from "./SectionEasySteps/SectionEasySteps";
import SectionDiscount from "./SectionDiscount/SectionDiscount";
import SectionOrganic from "./SectionOrganic/SectionOrganic";
import SectionDelivery from "./SectionDelivery/SectionDelivery";
import SectionRecall from "./SectionRecall/SectionRecall";
import Footer from "./Footer/Footer";
import MobileMenu from "./MobileMenu/MobileMenu";
import Modal from "./Modal/Modal";
import plants from "../plant.json";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuToggle = () => setMobileMenu(!mobileMenu);

  const [contact, setContact ] = useState("");
  const onRecallSubmit = (values, actions) => {
        setContact([...contact, values]);
    actions.resetForm();
  };
  

  return (
    <>
      <Header onMenu={mobileMenuToggle} />
      <main>
        <SectionHero />
        <SectionVegetables />
        <SectionEasySteps />
        <SectionDiscount />
        <SectionOrganic plants={plants} />
        <SectionDelivery />
        <SectionRecall handleSubmit={onRecallSubmit}/>
      </main>
      <Footer />
      <MobileMenu open={mobileMenu} onMenu={mobileMenuToggle} />
      <Modal />
    </>
  );
};
export default App;
