import s from "./BasketCard.module.css";

const BasketCard = ({ children, image, subtitle="Plant", title, descript }) => {
  return (
    <>
      <div className={s.titleChek}>
        <h3 className={s.title}>{title}</h3>
        {children}
      </div>
     <div className={s.descrBox}>
          <p className={s.text}>{subtitle}</p>
          <img src={image} alt={descript} width={94} height={78} />
     </div>
    </>
  );
};

export default BasketCard;
