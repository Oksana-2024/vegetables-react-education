import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
Modal.setAppElement("#root");
import s from "./ModalForm.module.css";


const ModalForm = ({ modalIsOpen, closeModal, children }) => {
 
  //todo доробити!
 

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "355px",
      zIndex: "9",
      overflowY: "scroll",
      maxHeight: "100vh",
      boxShadow:
        "0 0 9px 0 rgba(0, 0, 0, 0.01), 0 0 18px 0 rgba(0, 0, 0, 0.02), 0 0 36px 0 rgba(0, 0, 0, 0.03), 0 0 71px 0 rgba(0, 0, 0, 0.03), 0 0 131px 0 rgba(0, 0, 0, 0.04), 0 0 223px 0 rgba(0, 0, 0, 0.05)",
      backgroundColor: "var(--white)",
    },
    overlay: {
      zIndex: "8",
    },
  };

  return (
    <div className={s.modal}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={s.titleBox}>
          <h2 className={s.title}>Your Order</h2>
          <button onClick={closeModal} className={s.btn}>
            <IoMdClose size={24} className={s.iconClose} />
          </button>
        </div>
        {children}
      </Modal>
    </div>
  );
};

export default ModalForm;
