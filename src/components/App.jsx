import css from "./App.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import MobileMenu from "./MobileMenu/MobileMenu";
import clsx from "clsx";
import Vegetables from "./Vegetables/Vegetables";
import { useState } from "react";
import EasySteps from "./EasySteps/EasySteps";
import Discount from "./Discount/Discount";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuToggle = () => setMobileMenu(!mobileMenu);
  return (
    <>
      <section className={css.headerPage}>
        <div className={css.container}>
          <Header handleClick={mobileMenuToggle} />
        </div>
      </section>
      <main>
        <section className={css.heroPage}>
          <div className={clsx(css.container, css.heroContainer)}>
            <Hero />
          </div>
        </section>
        <section className={css.vegetablesPage}>
          <div className={clsx(css.container, css.vegetablesContainer)}>
            <Vegetables />
          </div>
        </section>
        <section>
          <div className={css.container}>
            <EasySteps />
          </div>
        </section>
        <section className={css.discountPage}>
          <Discount />
        </section>
      </main>
      <section className={css.footerPage}>
        <div className={clsx(css.container, css.footerContainer)}>
          <Footer />
        </div>
      </section>
      <MobileMenu open={mobileMenu} handleClick={mobileMenuToggle} />
    </>
  );
};
export default App;
