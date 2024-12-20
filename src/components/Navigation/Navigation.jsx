import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = ({
  header,
  menu,
  footer,
  navMenu,
  navHeader,
  navfooter,
  nav
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
          <a
            className={clsx(
              navMenu && css.linkMenu,
              navHeader && css.linkHeader,
              navfooter && css.linkFooter,
              css.link
            )}
            href="#work"
          >
            How It Works
          </a>
        </li>
        <li>
          <a
            className={clsx(
              navMenu && css.linkMenu,
              navHeader && css.linkHeader,
              navfooter && css.linkFooter,
              css.link
            )}
            href="#organic"
          >
            Vegetables
          </a>
        </li>
        <li>
          <a
            className={clsx(
              navMenu && css.linkMenu,
              navHeader && css.linkHeader,
              navfooter && css.linkFooter,
              css.link
            )}
            href="#contacts"
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
