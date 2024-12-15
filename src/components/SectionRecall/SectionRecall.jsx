import GlobalContainer from "../GlobalContainer/GlobalContainer";
import Recall from "../Recall/Recall";
import css from "./SectionRecall.module.css"

const SectionRecall = () => {
  return (
    <section className={css.recallPage}>
      <GlobalContainer>
        <Recall />
      </GlobalContainer>
    </section>
  );
};
export default SectionRecall;
