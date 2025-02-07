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
import Basket from "./Basket/Basket";
import ModalForm from "./ModalForm/ModalForm";
import Form from "./Form/Form";
import plants from "../plant.json";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const mobileMenuToggle = () => setMobileMenu(!mobileMenu);

  const [contact, setContact] = useState("");
  const onRecallSubmit = (values, actions) => {
    setContact([...contact, values]);
    actions.resetForm();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  return (
    <>
      <Header onMenu={mobileMenuToggle} openModal={openModal} />
      <main>
        <SectionHero openModal={openModal} />
        <SectionVegetables />
        <SectionEasySteps />
        <SectionDiscount />
        <SectionOrganic plants={plants} openModal={openModal} />
        <SectionDelivery />
        <SectionRecall handleSubmit={onRecallSubmit} />
      </main>
      <Footer />
      <MobileMenu
        open={mobileMenu}
        onMenu={mobileMenuToggle}
        openModal={openModal}
        closeMenu={mobileMenuToggle}
      />
      <ModalForm closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <Basket />
        <Form />
      </ModalForm>
    </>
  );
};
export default App;
