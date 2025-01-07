import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import s from "./Form.module.css";
import modalGirl from "../../assets/images/girl_modal.png";
import modalGirl2x from "../../assets/images/girl_modal@2x.png";
import { useId } from "react";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    card: "",
    comment: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const cardFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("test", values);

    actions.resetForm();
  };

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
    <div className={s.formContainer}>
      
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SchemaMessage}
      >
        <FormikForm className={s.form}>
          <Field
            type="text"
            name="name"
            placeholder="Enter full name..."
            className={s.field}
            id={nameFieldId}
          />
          <ErrorMessage className={s.errMessage} name="name" component="div" />
          <Field
            type="email"
            name="email"
            placeholder="Enter email..."
            className={s.field}
            id={emailFieldId}
          />
          <ErrorMessage className={s.errMessage} name="email" component="div" />
          <Field
            type="text"
            name="card"
            placeholder="Enter card..."
            className={s.field}
            id={cardFieldId}
          />
          <ErrorMessage className={s.errMessage} name="card" component="div" />
          <Field
            as="textarea"
            type="text"
            name="comment"
            placeholder="Enter comments..."
            className={s.fieldText}
            id={msgFieldId}
          />
          <ErrorMessage
            className={s.errMessage}
            name="comment"
            component="div"
          />
          <button className={s.submitBtn} type="submit">
            Submit
          </button>
        </FormikForm>
      </Formik>
      <img
        className={s.modalImage}
        src={modalGirl}
        alt="Girl"
        srcSet={modalGirl2x}
        width={444}
        height={413}
      />
    </div>
  );
};

export default Form;
