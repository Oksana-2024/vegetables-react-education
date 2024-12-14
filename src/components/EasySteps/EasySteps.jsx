import css from "./EasySteps.module.css";
import a from "../../assets/images/img_girl.png";

const EasySteps = () => {
  return (
    <div className={css.easyBox}>
      <h2 className={css.easyTitle}>
        3 Easy Steps for Buying Fresh Vegetables
      </h2>
      <ul className={css.easyList}>
        <li className={css.listItem}>
          <span className={css.numberSpan}>1</span>
          <p className={css.easyText}>
            Just choose the vegetable you want to order by clicking on the
            checkboxes next to it.
          </p>
        </li>
        <li className={css.listItem}>
          <span className={css.numberSpan}>2</span>
          <p className={css.easyText}>
            Click on the basket and fill out the form.
          </p>
        </li>
        <li className={css.listItem}>
          <span className={css.numberSpan}>3</span>
          <p className={css.easyText}>
            Sit back and relax! Your fresh vegetables basket will be delivered.
          </p>
        </li>
      </ul>
      <img
        className={css.easyImg}
        src={a}
        alt="Girl"
        width={258}
        height={319}
      />
    </div>
  );
};

export default EasySteps;
