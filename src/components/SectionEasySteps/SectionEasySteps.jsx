import EasySteps from "../EasySteps/EasySteps";
import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionEasySteps.module.css";

const SectionEasySteps = () => {
  return (
    <section id="work" className={css.easyPage}>
      <GlobalContainer>
        <EasySteps />
      </GlobalContainer>
    </section>
  );
};

export default SectionEasySteps;
