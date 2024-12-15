import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionDelivery.module.css";
import img from "../../assets/images/Illustration.png";

const SectionDelivery = () => {
  return (
    <section className={css.deliveryPage}>
      <GlobalContainer>
       <div className={css.deliveryBox}>
             <img className={css.deliveryImg} src={img} alt="Illustration delivery" width={295} />
             <h2 className={css.title}>
               The best shipping for you!{" "}
               <span className={css.partPrymary}>Your products </span> always arrive in
               the <span className={css.partSecondary}> best </span>
               conditions!
             </h2>
           </div>
      </GlobalContainer>
    </section>
  );
};

export default SectionDelivery;
