import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [savedEmail, setSavedEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setSavedEmail(email);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: savedEmail || '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      alert('Login Successful');
      console.log(values);
      if (rememberMe) {
        localStorage.setItem('email', values.email);
      } else {
        localStorage.removeItem('email');
      }
    },
  });

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <form onSubmit={formik.handleSubmit} aria-labelledby="login-form">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
          aria-required="true"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
          aria-required="true"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Remember Me
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
