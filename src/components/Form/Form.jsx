import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import s from "./Form.module.css";

const Form = ({ onSubmit }) => {
  const SchemaMessage = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    card: Yup.string().min(16).max(16).required("Required"),
    comment: Yup.string().max(300, "Too Long!"),
  });
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", card: "", comment: "" }}
        onSubmit={onSubmit}
        validationSchema={SchemaMessage}
      >
        <form className={s.form}>
          <Field
            type="text"
            name="name"
            placeholder="Enter full name..."
            className={s.field}
          />
          <ErrorMessage name="name" component="div" />
          <Field
            type="email"
            name="email"
            placeholder="Enter email..."
            className={s.field}
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="number"
            name="card"
            placeholder="Enter card..."
            className={s.field}
          />
          <ErrorMessage name="card" component="div" />
          <Field
            type="text"
            name="comment"
            placeholder="Enter comments..."
            className={s.fieldText}
          />
          <ErrorMessage name="comment" component="div" />
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
};

export default Form;
