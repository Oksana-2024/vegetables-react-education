import css from "./App.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
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
        <section className={css.heroPage}></section>
      </main>
      <section className={css.footerPage}>
        <div className={css.container}>
          <Footer />
        </div>
      </section>
    </>
  );
};
export default App;
