import css from "./SectionDiscount.module.css";

const SectionDiscount = () => {
  return (
    <section className={css.discountPage}>
     <h2 className={css.hidden}>Discount</h2>
           <div className={css.firstLine}>
             <ul className={css.list}>
               <li className={css.text}>
                 Discount up to <span>40%</span>! Taste <span>the vitamins</span> and keep your
                 health.
               </li>
               <li className={css.text}>
                 Discount up to <span>40%</span>! Taste <span>the vitamins</span> and keep your
                 health.
               </li>
               <li className={css.text}>
                 Discount up to <span>40%</span>! Taste <span>the vitamins</span> and keep your
                 health.
               </li>
             </ul>
           </div>
           <div className={css.secondLine}>
             <ul className={css.list}>
               <li className={css.text}>
                 Discount up to <span>40%</span>! Taste <span>the vitamins</span> and keep your
                 health.
               </li>
               <li className={css.text}>
                 Discount up to <span>40%</span>! Taste <span>the vitamins</span> and keep your
                 health.
               </li>
               <li className={css.text}>
                 Discount up to <span>40%</span>! Taste <span>the vitamins</span> and keep your
                 health.
               </li>
             </ul>
           </div>
    </section>
  );
};
export default SectionDiscount;
