import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = ({
  header,
  menu,
  footer,
  navMenu,
  navHeader,
  navfooter,
  nav,
  marginFooter,
}) => {
  return (
    <nav className={clsx(menu ? css.navMenu : null, nav ? css.navStyles : null, marginFooter ? css.marginFooter: null)}>
      <ul
        className={clsx(
          menu ? css.listMenu : null,
          header ? css.listHeader : null,
          footer ? css.listFooter : null
        )}
      >
        <li>
          <a
            className={clsx(
              navMenu ? css.linkMenu : null,
              navHeader ? css.linkHeader : null,
              navfooter ? css.linkFooter : null,
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
              navMenu ? css.linkMenu : null,
              navHeader ? css.linkHeader : null,
              navfooter ? css.linkFooter : null,
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
              navMenu ? css.linkMenu : null,
              navHeader ? css.linkHeader : null,
              navfooter ? css.linkFooter : null,
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
