import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import styles from "../ContactForm/Form.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm, isSubmitting }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  const validateName = (value) => {
    let error;
    if (!value.trim()) {
      error = "Name is required";
    }
    return error;
  };

  const validateNumber = (value) => {
    let error;
    if (!value || value === "0") {
      error = "Number is required";
    }
    return error;
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className={styles.input}
              validate={validateName}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.label}>
              Number:
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              className={styles.input}
              validate={validateNumber}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Add new Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
