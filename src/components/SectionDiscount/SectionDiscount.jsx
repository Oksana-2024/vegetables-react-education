import Marquee from "react-fast-marquee";
import css from "./SectionDiscount.module.css";

const SectionDiscount = () => {
  return (
    <section className={css.discountPage}>
      <h2 className={css.hidden}>Discount</h2>
      <div className={css.firstLine}>
        <Marquee autoFill>
          Discount up to <span>40%</span>! Taste <span>the vitamins</span> and
          keep your health.
        </Marquee>
      </div>
      <div className={css.secondLine}>
        <Marquee autoFill direction={"right"}>
          Discount up to <span>40%</span>! Taste <span>the vitamins</span> and
          keep your health.
        </Marquee>
      </div>
    </section>
  );
};
export default SectionDiscount;
