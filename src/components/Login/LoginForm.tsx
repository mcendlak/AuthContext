import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import AuthApi from "../../context/AuthApi";
import { isEqual } from "lodash";

// można dać credentials do kontekstu? czy lepiej np. z poziomu App przekazywać w dół propsami?
import { CREDENTIALS } from "../../credentials";

const LoginForm = () => {
  const Auth = useContext(AuthApi);

  interface Ivalues {
    email: string;
    password: string;
  }

  const handleSubmit = (values: Ivalues) => {
    if (isEqual(CREDENTIALS, values)) {
      Auth.onLogIn();
    } else {
      alert("Wrong e-mail address or password");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address format")
          .required(`E-mail address is required`),
        password: Yup.string()
          .min(2, `Password has to be at least 2 characters long`)
          .max(15, `Password cannot be longer than 15 characters`)
          .required(`Password is required`),
      })}
      onSubmit={handleSubmit}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Log in</h1>
        <Field type="email" name="email" placeholder='E-mail address' />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder='Password' />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
