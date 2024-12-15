import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionRecall.module.css"
import girl from "../../assets/images/image_recall.png";

const SectionRecall = () => {
  return (
    <section className={css.recallPage}>
      <GlobalContainer>
       <h2 id="contacts" className={css.title}>Fresh Harvest Box has got you covered</h2>
             <p className={css.text}>
               Our boxes are packed with delicious, nutritious vegetables, perfect for
               anyone looking to eat healthier or support local farmers. Order your box
               today and start enjoying the best that nature has to offer!
             </p>
             <form className={css.form} action="">
               <label htmlFor="user_tel">
                 <input
                   className={css.inputTel}
                   type="tel"
                   name="user_tel"
                   id="user_tel"
                   placeholder="+380 ()"
                 />
               </label>
               <button className={css.recallBtn} type="submit">Recall</button>
             </form>
             <img src={girl} alt="Girl with vegetable" width={335} className={css.image}/>
      </GlobalContainer>
    </section>
  );
};
export default SectionRecall;
