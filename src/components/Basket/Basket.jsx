import tomato from "../../assets/images/tomato_basket.png";
import cabbage from "../../assets/images/cabbage_basket.png";
import vegetables from "../../assets/images/vegetables_basket.png";

const Basket = () => {
  return (
    <ul>
      <li>
        <h3>Cabbage Basket</h3>
        <label>
          <input type="checkbox" name="checkbox" id="" />
        </label>
        <p>Plant</p>
        <img src={cabbage} alt="Basket cabbage" width={94} height={78} />
      </li>
      <li>
        <h3>Tomato Basket</h3>
        <label>
          <input type="checkbox" name="checkbox" id="" />
        </label>
        <p>Plant</p>
        <img src={tomato} alt="Basket tomato" width={94} height={78} />
      </li>
      <li>
        <h3>Vegetables Basket</h3>
        <label>
          <input type="checkbox" name="checkbox" id="chekbox" />
        </label>
        <p>Plant</p>
        <img src={vegetables} alt="Basket vegetables" width={94} height={78} />
      </li>
    </ul>
  );
};

export default Basket;
