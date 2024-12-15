import GlobalContainer from "../GlobalContainer/GlobalContainer";
import Hero from "../Hero/Hero";
import s from "./SectionHero.module.css";

const HeroSection = () => {
  return (
    <section className={s.heroPage}>
      <GlobalContainer>
        <Hero />
      </GlobalContainer>
    </section>
  );
};

export default HeroSection;
