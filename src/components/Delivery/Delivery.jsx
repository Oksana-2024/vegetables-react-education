import css from "./Delivery.module.css";
import img from "../../assets/images/Illustration.png";

const Delivery = () => {
  return (
    <div className={css.deliveryBox}>
      <img className={css.deliveryImg} src={img} alt="Illustration delivery" width={295} />
      <h2 className={css.title}>
        The best shipping for you!{" "}
        <span className={css.partPrymary}>Your products </span> always arrive in
        the <span className={css.partSecondary}> best </span>
        conditions!
      </h2>
    </div>
  );
};

export default Delivery;
