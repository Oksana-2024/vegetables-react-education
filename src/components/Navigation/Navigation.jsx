import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavHashLink } from "react-router-hash-link";

const Navigation = ({
  header,
  menu,
  footer,
  navMenu,
  navHeader,
  navfooter,
  nav,
  closeMenu
}) => {
  return (
    <nav
      className={clsx(
        menu && css.navMenu,
        nav && css.navStyles
      )}
    >
      <ul
        className={clsx(
          menu && css.listMenu,
          header && css.listHeader,
          footer && css.listFooter
        )}
      >
        <li>
          <NavHashLink
            className={clsx(
              navMenu && css.linkMenu,
              navHeader && css.linkHeader,
              navfooter && css.linkFooter,
              css.link
            )}
            to="#work"
            onClick={closeMenu}
          >
            How It Works
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className={clsx(
              navMenu && css.linkMenu,
              navHeader && css.linkHeader,
              navfooter && css.linkFooter,
              css.link
            )}
           to="#organic"
           onClick={closeMenu}
          >
            Vegetables
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            className={clsx(
              navMenu && css.linkMenu,
              navHeader && css.linkHeader,
              navfooter && css.linkFooter,
              css.link
            )}
           to="#contacts"
           onClick={closeMenu}
          >
            Contacts
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
