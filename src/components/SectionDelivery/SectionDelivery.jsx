import Delivery from "../Delivery/Delivery";
import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionDelivery.module.css";

const SectionDelivery = () => {
  return (
    <section className={css.deliveryPage}>
      <GlobalContainer>
        <Delivery />
      </GlobalContainer>
    </section>
  );
};

export default SectionDelivery;
