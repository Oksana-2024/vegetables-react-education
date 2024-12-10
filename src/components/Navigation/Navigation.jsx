import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = ({ header, menu }) => {
  return (
    <nav>
      <ul
        className={clsx(
          menu ? css.listMenu : null,
          header ? css.listHeader : css.listFooter
        )}
      >
        <li>
          <a className={css.linkMenu} href="#">
            How It Works
          </a>
        </li>
        <li>
          <a className={css.linkMenu} href="#">
            Vegetables
          </a>
        </li>
        <li>
          <a className={css.linkMenu} href="#">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
