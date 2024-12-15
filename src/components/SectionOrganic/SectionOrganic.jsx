import GlobalContainer from "../GlobalContainer/GlobalContainer";
import OrganicShop from "../OrganicShop/OrganicShop";
import plants from "../../plant.json";
import css from "./SectionOrganic.module.css";

const SectionOrganic = () => {
  return (
    <section className={css.organicPage}>
      <GlobalContainer>
        <OrganicShop plants={plants} />
      </GlobalContainer>
    </section>
  );
};

export default SectionOrganic;
