import css from "./Vegetables.module.css";

const Vegetables = () => {
  return (
    <>
      <h2 className={css.title}>
        To order your vegetable basket, simply follow these easy steps
      </h2>
      <p className={css.text}>
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
