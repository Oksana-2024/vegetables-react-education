import s from "./BasketCard.module.css";

const BasketCard = ({
  children,
  image1d,
  image2d,
  image1t,
  image2t,
  image1m,
  image2m,
  image,
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
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={`${image1d} 1x, ${image2d} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${image1t} 1x, ${image2t} 2x`}
          />
          <source
            media="(max-width:767px)"
            srcSet={`${image1m} 1x, ${image2m} 2x`}
          />
          <img
            className={s.img}
            src={image}
            alt={descript}
            width={94}
            height={78}
          />
        </picture>
      </div>
    </>
  );
};

export default BasketCard;
