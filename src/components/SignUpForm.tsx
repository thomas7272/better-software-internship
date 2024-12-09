import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import usePasswordStrength from '../hooks/usePasswordStrength';

const SignUpForm: React.FC = () => {
  const { passwordStrength, getStrengthLabel } = usePasswordStrength();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      alert('Sign Up Successful');
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} aria-labelledby="sign-up-form">
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...formik.getFieldProps('username')}
          aria-required="true"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
      </div>

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
        <div>Password Strength: {getStrengthLabel(passwordStrength)}</div>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
