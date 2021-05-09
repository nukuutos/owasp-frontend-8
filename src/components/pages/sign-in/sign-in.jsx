import React from 'react';
import Input from '../../utils/form/input';
import { Formik, Form } from 'formik';
import useAsyncAction from '../../../hooks/use-async-action/use-async-action';
import Credentials from './credentials';

const SignIn = ({ setAlerts, setAccessToken }) => {
  const [asyncAction] = useAsyncAction();

  return (
    <div className="sign-in">
      <h1 className="logo">Dogeclubhouse</h1>

      <div className="sign-in__wrapper">
        <Credentials />
        <Formik
          initialValues={{ username: 'formik', password: '' }}
          onSubmit={async (values) => {
            // async
            const config = {
              method: 'post',
              url: `/auth/sign-in`,
              data: { ...values },
            };

            const data = await asyncAction(config, setAlerts);

            if (data) setAccessToken(data.accessToken);
          }}>
          {({ isSubmitting }) => (
            <Form className="sign-in__form">
              <h1 className="sign-in__heading heading">Sign in</h1>

              <div className="label mb-s-1">Username</div>
              <Input className="sign-in__input input mb-m-1" type="text" name="username" />

              <div className="label mb-s-1">Password</div>
              <Input className="sign-in__input input" type="password" name="password" />

              <button
                disabled={isSubmitting}
                type="submit"
                className={`sign-in__btn btn btn--primary btn--flat 
            ${isSubmitting ? 'btn--spinner btn--submitted' : ''} mt-m-2`}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
