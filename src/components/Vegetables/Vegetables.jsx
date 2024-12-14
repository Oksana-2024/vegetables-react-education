import css from "./Vegetables.module.css";
import a from "../../assets/images/img_vegetables.png";

const Vegetables = () => {
  return (
    <>
      <h2 className={css.title}>
        To order your vegetable basket, simply follow these easy steps
      </h2>
      <img className={css.image} src={a} alt="Broccoli" width={335} height={158} />
      <p className={css.text1}>
        Our baskets are assembled with care and delivered straight to your
        doorstep, so you can enjoy the taste of fresh fruit without ever leaving
        your home.
      </p>
      <p className={css.text}>
        Whether you are looking for a healthy snack or a thoughtful gift, our
        fruit baskets are the perfect choice.
      </p>
    </>
  );
};
export default Vegetables;
