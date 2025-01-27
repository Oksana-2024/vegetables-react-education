import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionHero.module.css";
import women from "../../assets/images/women.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import clsx from "clsx";
import Button from "../Button/Button";

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
           <Button nameButton="organic" link="organic"/>
           <Button nameButton="products" link="products"/>
           <Button nameButton="BASKET" link="basket" onClick={openModal}/>
           <Button nameButton="VEGETABLES" link=""/>
           
           
          </div>
       </div>
      </GlobalContainer>
    </section>
  );
};

export default HeroSection;
