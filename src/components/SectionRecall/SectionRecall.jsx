import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionRecall.module.css";
import girl from "../../assets/images/image_recall.png";
import girl1x from "../../assets/images/GirlDesktop.png";
import girl2x from "../../assets/images/GirlDesktop@2x.png";
import girl1xTablet from "../../assets/images/GirlTablet.png";
import girl2xTablet from "../../assets/images/GirlTablet@2x.png";
import girl1xPhone from "../../assets/images/GirlPhone.png";
import girl2xPhone from "../../assets/images/GirlPhone@2x.png";

const SectionRecall = () => {
  return (
    <section className={css.recallPage}>
      <GlobalContainer recall>
        <div className={css.box}>
          <h2 id="contacts" className={css.title}>
            Fresh Harvest Box has got you covered
          </h2>
          <p className={css.text}>
            Our boxes are packed with delicious, nutritious vegetables, perfect
            for anyone looking to eat healthier or support local farmers. Order
            your box today and start enjoying the best that nature has to offer!
          </p>
          <form className={css.form} action="">
            <label htmlFor="user_tel">
              <input
                className={css.inputTel}
                type="tel"
                name="user_tel"
                id="user_tel"
                placeholder="+380 ()"
              />
            </label>
            <button className={css.recallBtn} type="submit">
              Recall
            </button>
          </form>
        </div>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${girl1x} 1x, ${girl2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${girl1xTablet} 1x, ${girl2xTablet} 2x`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${girl1xPhone} 1x, ${girl2xPhone} 2x`}
          />
          <img
            src={girl}
            alt="Girl with vegetable"
            width={335}
            className={css.image}
          />
        </picture>
      </GlobalContainer>
    </section>
  );
};
export default SectionRecall;
