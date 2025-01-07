import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionDelivery.module.css";
import img from "../../assets/images/Illustration.png";
import image1d from "../../assets/images/Illustration_d.png";
import image2d from "../../assets/images/Illustration_d@2x.png";
import image1t from "../../assets/images/Illustration_t.png";
import image2t from "../../assets/images/Illustration_t@2x.png";
import image1m from "../../assets/images/Illustration_m.png";
import image2m from "../../assets/images/Illustration_m@2x.png";

const SectionDelivery = () => {
  return (
    <section className={css.deliveryPage}>
      <GlobalContainer>
        <div className={css.deliveryBox}>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${image1d} 1x, ${image2d} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${image1t} 1x, ${image2t} 2x`}
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${image1m} 1x, ${image2m} 2x`}
            />
            <img
              className={css.deliveryImg}
              src={img}
              alt="Illustration delivery"
              width={295}
            />
          </picture>
          <h2 className={css.title}>
            The best shipping for you!
            <span className={css.partPrymary}>Your products </span> always
            arrive in the <span className={css.partSecondary}> best </span>
            conditions!
          </h2>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default SectionDelivery;
