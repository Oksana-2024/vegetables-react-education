import tomato from "../../assets/images/tomato_basket.png";
import cabbage from "../../assets/images/cabbage_basket.png";
import vegetables from "../../assets/images/vegetables_basket.png";
import s from "./Basket.module.css";
import Checkbox from "../Checkbox/Checkbox";
import BasketCard from "../BasketCard/BasketCard";
import tomatoD from "../../assets/images/tomato_d.png";
import tomatoT from "../../assets/images/tomato_t.png";
import tomatoM from "../../assets/images/tomato_m.png";
import tomato2D from "../../assets/images/tomato_d@2x.png";
import tomato2T from "../../assets/images/tomato_t@2x.png";
import tomato2M from "../../assets/images/tomato_m@2x.png";
import cabageD from "../../assets/images/cabbage_d.png";
import cabage2D from "../../assets/images/cabbage_d@2x.png";
import cabageM from "../../assets/images/cabbage_m.png";
import cabage2M from "../../assets/images/cabbage_m@2x.png";
import cabageT from "../../assets/images/cabbage_t.png";
import cabage2T from "../../assets/images/cabbage_t@2x.png";
import veganD from "../../assets/images/vegetables_d.png";
import vegan2D from "../../assets/images/vegetables_d@2x.png";
import veganT from "../../assets/images/vegetables basket_t.png";
import vegan2T from "../../assets/images/vegetables basket_t@2x.png";
import veganM from "../../assets/images/vegetables basket_m.png";
import vegan2M from "../../assets/images/vegetables basket_m@2x.png";

const Basket = () => {
  return (
    <ul className={s.basketList}>
      <li className={s.basketItem}>
        <BasketCard
          title="Cabbage Basket"
          image={cabbage}
          descript="Basket cabbage"
          image1d={cabageD}
          image2d={cabage2D}
          image1m={cabageM}
          image2m={cabage2M}
          image1t={cabageT}
          image2t={cabage2T}
        >
          <Checkbox />
        </BasketCard>
      </li>
      <li className={s.basketItem}>
        <BasketCard
          title="Tomato Basket"
          image={tomato}
          descript="Basket tomato"
          image1d={tomatoD}
          image2d={tomato2D}
          image1t={tomatoT}
          image2t={tomato2T}
          image1m={tomatoM}
          image2m={tomato2M}
        >
          <Checkbox />
        </BasketCard>
      </li>
      <li className={s.basketItem}>
        <BasketCard
          title="Vegetables Basket"
          image={vegetables}
          descript="Basket vegetables"
          image1d={veganD}
          image2d={vegan2D}
          image1t={veganT}
          image2t={vegan2T}
          image1m={veganM}
          image2m={vegan2M}
        >
          <Checkbox />
        </BasketCard>
      </li>
    </ul>
  );
};

export default Basket;
