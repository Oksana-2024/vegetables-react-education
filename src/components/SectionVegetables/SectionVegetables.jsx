import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionVegetables.module.css";
import a from "../../assets/images/img_vegetables.png";

const SectionVegetables = () => {
  return (
    <section className={css.vegetablesPage}>
      <GlobalContainer className={css.vegetablesContainer}>
      <div className={css.firstBox}>
         <h2 className={css.title}>
                 To order your vegetable basket, simply follow these easy steps
               </h2>
               <img className={css.image} src={a} alt="Broccoli" width={335} height={158} />
      </div>
            <div className={css.secondBox}>
               <p className={css.text1}>
                 Our baskets are assembled with care and delivered straight to your
                 doorstep, so you can enjoy the taste of fresh fruit without ever leaving
                 your home.
               </p>
               <p className={css.text}>
                 Whether you are looking for a healthy snack or a thoughtful gift, our
                 fruit baskets are the perfect choice.
               </p>
            </div>
      </GlobalContainer>
    </section>
  );
};

export default SectionVegetables;
