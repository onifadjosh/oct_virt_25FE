import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup
        .string("")
        .email("invalid email format")
        .required("email is required"),
      password: yup.string("").required("password is required"),
    }),

    onSubmit: async (values) => {
      try {
        setloading(true);
        console.log(values);
        const response = await axios.post(
          "https://oct-virt-25be.onrender.com/user/login",
          values
        );
        console.log(response.data);
        setloading(false);
        localStorage.setItem("token", response.data.user.token)
        navigate("/fetch");
      } catch (error) {
        setloading(false);
        console.log(error);
        alert("login failed");
      }
    },
  });
  return (
    <div className="mt-5 pt-5">
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <input
        type="text"
        placeholder="Password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <button
        type="submit"
        onClick={formik.handleSubmit}
        className="btn btn-success"
      >
        {loading ? "Login in ..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
