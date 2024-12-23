import GlobalContainer from "../GlobalContainer/GlobalContainer";
import css from "./SectionRecall.module.css";
import girl from "../../assets/images/image_recall.png";
import girl1x from "../../assets/images/GirlDesktop.png";
import girl2x from "../../assets/images/GirlDesktop@2x.png";
import girl1xTablet from "../../assets/images/GirlTablet.png";
import girl2xTablet from "../../assets/images/GirlTablet@2x.png";
import girl1xPhone from "../../assets/images/GirlPhone.png";
import girl2xPhone from "../../assets/images/GirlPhone@2x.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const SectionRecall = ({ handleSubmit }) => {
  const schema = yup.object().shape({
    number: yup
      .string()
      .min(10, "Min. length is 10 symbols")
      .max(16, "Max. length is 16 symbols")
      .required(),
  });
  return (
    <section className={css.recallPage}>
      <GlobalContainer recall>
        <div className={css.box}>
          <h2 id="contacts" className={css.title}>
            Fresh Harvest Box has got you covered
          </h2>
          <p className={css.text}>
            Our boxes are packed with delicious, nutritious vegetables, perfect
            for anyone looking to eat healthier or support local farmers. Order
            your box today and start enjoying the best that nature has to offer!
          </p>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ number: "" }}
            validationSchema={schema}
          >
            <Form className={css.form}>
              <label htmlFor="number"></label>
              <Field
                className={css.inputTel}
                type="tel"
                name="number"
                id="number"
                placeholder="+380 ()"
              />

              <ErrorMessage
                className={css.textError}
                name="number"
                component="span"
              />

              <button className={css.recallBtn} type="submit">
                Recall
              </button>
            </Form>
          </Formik>
        </div>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${girl1x} 1x, ${girl2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${girl1xTablet} 1x, ${girl2xTablet} 2x`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${girl1xPhone} 1x, ${girl2xPhone} 2x`}
          />
          <img
            src={girl}
            alt="Girl with vegetable"
            width={335}
            className={css.image}
          />
        </picture>
      </GlobalContainer>
    </section>
  );
};
export default SectionRecall;
