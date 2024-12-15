import Discount from "../Discount/Discount";
import css from "./SectionDiscount.module.css";

const SectionDiscount = () => {
  return (
    <section className={css.discountPage}>
      <Discount />
    </section>
  );
};
export default SectionDiscount;
