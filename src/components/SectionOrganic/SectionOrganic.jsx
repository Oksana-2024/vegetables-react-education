import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionOrganic.module.css";
import CardVegetable from "../CardVegetable/CardVegetable";
import { GoArrowDown } from "react-icons/go";

const SectionOrganic = ({plants, openModal}) => {
  return (
    <section className={css.organicPage}>
      <GlobalContainer>
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
      <button className={css.button} type="button" onClick={openModal}>
        <GoArrowDown size={14} className={css.iconOrder} />
        ORDER
      </button>
      </GlobalContainer>
    </section>
  );
};

export default SectionOrganic;
