import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionHero.module.css";
import women from "../../assets/images/women.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import clsx from "clsx";

const HeroSection = ({openModal}) => {
  return (
    <section className={css.heroPage}>
      <GlobalContainer hero={true}>
      <div className={css.firstBox}>
         <div className={css.box}>
            <img className={clsx(css.userImg, css.img1) } src={user1} alt="Photo" width={44} />
            <img className={clsx(css.userImg, css.img2) } src={user2} alt="Photo" width={44} />
            <img className={clsx(css.userImg, css.img3) } src={user3} alt="Photo" width={44} />
            <div className={css.reviews}>2K <span className={css.spanReviews}>reviews</span></div>
         </div>
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
          <button className={css.buttonRound} type="button" onClick={openModal}>
           shop now
          </button>
      </div>
       <div>
          <div className={css.imgBox}>
            <img
              className={css.imgHero}
              src={women}
              alt="Women"
              width={303}
              height={236}
            />
          </div>
          <div className={css.buttonBox}>
            <button className={css.buttonFirst} type="button">
              <a href="#organic"> #organic</a>
            </button>
            <button className={css.buttonSecond} type="button">
              <a href="#"> #products</a>
            </button>
            <button className={css.buttonThird} type="button" onClick={openModal}>
              <a href="#">#basket</a>
            </button>
            <button className={css.buttonFourth} type="button">
              <a href="#">#vegetables</a>
            </button>
          </div>
       </div>
      </GlobalContainer>
    </section>
  );
};

export default HeroSection;
