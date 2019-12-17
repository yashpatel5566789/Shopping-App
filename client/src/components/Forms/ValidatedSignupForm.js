import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Grid, Transition } from 'semantic-ui-react';




const ValidatedSignupForm = () => (
  <Formik
    initialValues={{ username:"",email: "", password: "", password1:"" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Signup in", values);
        setSubmitting(false);
      }, 500);
    }}


    validationSchema={Yup.object().shape({
        username: Yup.string()
        .required("Required"),
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
        password1: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
        
      
      
        
    })}
  >

    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <h1>Signup Page</h1>
            <label htmlFor="email">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <label htmlFor="email">Re-enter Password</label>
          <input
            name="password1"
            type="password"
            placeholder="Enter your Re-enter password"
            value={values.password1}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password1 && touched.password1 && "error"}
          />
          {errors.password1 && touched.password1 && (
            <div className="input-feedback">{errors.password1}</div>
          )}
          <button className="login "type="submit" disabled={isSubmitting}>
            Login
          </button>
          <button id="signup" type="submit" disabled={isSubmitting}>
            Signup
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedSignupForm;