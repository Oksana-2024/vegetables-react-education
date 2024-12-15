import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionHero.module.css";
import women from "../../assets/images/women.png";
import block from "../../assets/images/block_hero.png";

const HeroSection = () => {
  return (
    <section className={css.heroPage}>
      <GlobalContainer>
        <img
          className={css.imgBlock}
          src={block}
          alt="Revies"
          width={128}
          height={44}
        />
        <h1 className={css.titleHero}>
          organic <span className={css.titlePart}>vegetables</span> to your diet
          today!
        </h1>
        <p className={css.textHero}>
          Our expertly curated vegetable baskets are made with the freshest,
          highest quality vegetables available. Fresh Harvest Box has got you
          covered. Fresh, high-quality vegetables in expertly curated vegetable
          baskets delivered to you.
        </p>
        <button className={css.buttonRound} type="button">
          <div className={css.buttonText}>shop now</div>
        </button>
        <img
          className={css.imgHero}
          src={women}
          alt="Women"
          width={303}
          height={236}
        />
        <div className={css.buttonBox}>
          <button className={css.buttonFirst} type="button">
            <a href="#organic"> #organic</a>
          </button>
          <button className={css.buttonSecond} type="button">
            <a href="#"> #products</a>
          </button>
          <button className={css.buttonThird} type="button">
            <a href="#">#basket</a>
          </button>
          <button className={css.buttonFourth} type="button">
            <a href="#">#vegetables</a>
          </button>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default HeroSection;
