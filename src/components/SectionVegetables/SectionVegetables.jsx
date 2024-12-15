import GlobalContainer from "../GlobalContainer/GlobalContainer";
import Vegetables from "../Vegetables/Vegetables";
import css from "./SectionVegetables.module.css";

const SectionVegetables = () => {
  return (
    <section className={css.vegetablesPage}>
      <GlobalContainer>
        <Vegetables />
      </GlobalContainer>
    </section>
  );
};

export default SectionVegetables;
