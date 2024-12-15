import css from "./CardVegetable.module.css";
const CardVegetable = ({ name, img, alt, price }) => {
  return (
    <>
      <h3 className={css.title}>{name}</h3>
      <p className={css.descr}>Plant</p>

      <img className={css.imageCard} src={img} alt={alt} width={299} />

      <p className={price}>{price} UAH / kg</p>
    </>
  );
};

export default CardVegetable;
