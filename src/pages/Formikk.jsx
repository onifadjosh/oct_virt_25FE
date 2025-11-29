import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Formikk = () => {
  let formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      country: "",
      course: "",
      hobby: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      let response = await axios.post("https://oct-virt-25be.onrender.com/user/register", values);
      let data = response.data;
      console.log(data);
      alert(response.data.message);
    },

    validationSchema: yup.object({
      fullname: yup.string("").required("firstname is required"),
      email: yup.string("").required("email is required").email("invalid email format"),
      password: yup
        .string("")
        .required("Password is required")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(
          /[\W_]/,
          "Password must contain at least one special character"
        ),
        country: yup.string("").required("country is required"),
        course: yup.string("").required("course is required"),
        hobby: yup.string("").required("hobby is required"),
    }),
  });

//   console.log(formik.values);
//   console.log(formik.errors)
  console.log(formik.touched)
  return (
    <div className="mt-5 pt-5">
      <input
        type="text"
        name="fullname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="first name"
      />
    {(formik.touched.fullname&&formik.errors.fullname)&&<small className="text-danger">{formik.errors.fullname}</small>}
      <br />
      <input
        type="text"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="email"
      />
      {(formik.touched.email&&formik.errors.email)&&<small className="text-danger">{formik.errors.email}</small>}
      <br />
      <input
        type="text"
        name="country"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="country"
      />
      {(formik.touched.country&&formik.errors.country)&&<small className="text-danger">{formik.errors.country}</small>}
      <br />

      <input
        type="text"
        name="course"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="course"
      />
      {(formik.touched.course&&formik.errors.course)&&<small className="text-danger">{formik.errors.course}</small>}
      <br />
      <input
        type="text"
        name="hobby"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="hobby"
      />
      {(formik.touched.hobby&&formik.errors.hobby)&&<small className="text-danger">{formik.errors.hobby}</small>}
      <br />
      <input
        type="text"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="password"
      />
      {(formik.touched.password&&formik.errors.password)&&<small className="text-danger">{formik.errors.password}</small>}
      <br />

      <button type="submit" onClick={formik.handleSubmit}>
        submit
      </button>
    </div>
  );
};

export default Formikk;
