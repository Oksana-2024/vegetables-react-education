import { IoMdClose } from "react-icons/io";
import css from "./Modal.module.css";
import clsx from "clsx";
import Basket from "../Basket/Basket";

const Modal = () => {
  return (
    <div className={clsx(css.backdrop /* css.isOpen */)}>
      <div className={css.modal}>
        <div className={css.modalBox}>
          <h2 className={css.title}>Your Order</h2>
          <button className={css.close} type="button">
            <IoMdClose size={24} className={css.icon} />
          </button>
        </div>
        <Basket />
        <form action="">
          <label htmlFor="user_name">
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Enter full name..."
            />
          </label>
          <label htmlFor="user_email">
            <input
              type="email"
              name="email"
              id="user_email"
              placeholder="Enter email..."
            />
          </label>
          <label htmlFor="user_card">
            <input
              type="number"
              name="user_card"
              id="user_card"
              placeholder="Enter card.."
            />
          </label>
          <label htmlFor="user_comment">
            <textarea
              name="user_comment"
              id="user_comment"
              placeholder="Enter comments..."
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
