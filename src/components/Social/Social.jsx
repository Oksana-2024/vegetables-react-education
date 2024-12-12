import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import css from "./Social.module.css";

const Social = () => {
  return (
    <ul className={css.socList}>
      <li>
        <a href="./" className={css.socLink}>
          <FaFacebookF className={css.iconSocial} size={24} />
        </a>
      </li>
      <li>
        <a href="./" className={css.socLink}>
          <RiInstagramFill className={css.iconSocial} size={24} />
        </a>
      </li>
      <li>
        <a href="./" className={css.socLink}>
          <FaYoutube className={css.iconSocial} size={24} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
