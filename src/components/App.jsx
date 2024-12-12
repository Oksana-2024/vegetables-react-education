import css from "./App.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import MobileMenu from "./MobileMenu/MobileMenu";
import clsx from "clsx";
import Vegetables from "./Vegetables/Vegetables";
//import style from "../index.css"
//import textDiscount from "../textDiscount.json"
//import Discount from "./Discount/Discount";

const App = () => {
  return (
    <>
      <section className={css.headerPage}>
        <div className={css.container}>
          <Header />
        </div>
      </section>
      <main>
        <section className={css.heroPage}>
          <div className={clsx(css.container, css.heroContainer)}>
            <Hero/>
          </div>
        </section>
        <section className={css.vegetablesPage}>
          <div className={clsx(css.container, css.vegetablesContainer)}>
            <Vegetables/>
          </div>
        </section>
      </main>
      <section className={css.footerPage}>
        <div className={clsx(css.container, css.footerContainer)}>
          <Footer />
        </div>
      </section>
      <MobileMenu />
    </>
  );
};
export default App;
