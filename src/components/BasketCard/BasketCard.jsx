import Media from "react-media";
import s from "./BasketCard.module.css";

const BasketCard = ({
  children,
  image1d,
  image2d,
  image1t,
  image2t,
  image1m,
  image2m,
  subtitle = "Plant",
  title,
  descript,
}) => {
  return (
    <>
      <div className={s.titleChek}>
        <h3 className={s.title}>{title}</h3>
        {children}
      </div>
      <div className={s.descrBox}>
        <p className={s.text}>{subtitle}</p>
        <Media
          queries={{
            mobile: "(max-width: 767px)",
            tablet: "(min-width: 768px) and (max-width: 1279px)",
            desktop: "(min-width: 1280px)",
          }}
        >
          {(matches) => (
            <>
              {matches.desktop && (
                <img
                  className={s.img}
                  src={image1d}
                  alt={descript}
                  srcSet={image2d}
                  width={94}
                  height={78}
                />
              )}
              {matches.tablet && (
                <img
                  className={s.img}
                  src={image1t}
                  alt={descript}
                  srcSet={image2t}
                  width={94}
                  height={78}
                />
              )}
              {matches.mobile && (
                <img
                  className={s.img}
                  src={image1m}
                  alt={descript}
                  srcSet={image2m}
                  width={94}
                  height={78}
                />
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default BasketCard;
