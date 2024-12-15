import CardVegetable from "../CardVegetable/CardVegetable";
import css from "./OrganicShop.module.css";
import { GoArrowDown } from "react-icons/go";

const OrganicShop = ({ plants }) => {
  return (
    <>
      <h2 id="organic" className={css.title}>ORGANIC vegetables</h2>
      <p className={css.text}>
        Our organic vegetables are hand-picked from local farms and delivered
        straight to your doorstep, ensuring that you get the freshest and most
        nutritious produce possible.
      </p>
      <ul className={css.plantList}>
        {plants.map(({ id, ...plant }) => (
          <li key={id} className={css.plantItem}>
            <CardVegetable {...plant} />
          </li>
        ))}
      </ul>
      <button className={css.button} type="button">
        <GoArrowDown size={14} className={css.iconOrder} />
        ORDER
      </button>
    </>
  );
};
export default OrganicShop;
