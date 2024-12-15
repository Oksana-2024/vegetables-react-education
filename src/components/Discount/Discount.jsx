import css from "./Discount.module.css";

const Discount = () => {
  return (
    <>
      <h2 className={css.hidden}>Discount</h2>
      <div className={css.firstLine}>
        <ul className={css.list}>
          <li className={css.text}>
            Discount up to <span>40%</span>! Taste the vitamins and keep your
            health.
          </li>
          <li className={css.text}>
            Discount up to <span>40%</span>! Taste the vitamins and keep your
            health.
          </li>
          <li className={css.text}>
            Discount up to <span>40%</span>! Taste the vitamins and keep your
            health.
          </li>
        </ul>
      </div>
      <div className={css.secondLine}>
        <ul className={css.list}>
          <li className={css.text}>
            Discount up to <span>40%</span>! Taste the vitamins and keep your
            health.
          </li>
          <li className={css.text}>
            Discount up to <span>40%</span>! Taste the vitamins and keep your
            health.
          </li>
          <li className={css.text}>
            Discount up to <span>40%</span>! Taste the vitamins and keep your
            health.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Discount;
