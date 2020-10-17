import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import AuthCard from '../../Shared/AuthCard';
import TextInput from '../../Shared/TextInput';
import LoadingButton from '../../Shared/LoadingButton';
import Logo from '../../Shared/Logo';
import FlashMessages from '../../Shared/FlashMessages';

function ResetPassword() {
     const { errors, data, app, flash } = usePage();
     const [sending, setSending] = useState(false);
     const [values, setValues] = useState({
          email: data.email,
          token: data._token,
          password: '',
          password_confirmation:''
     });

     function handleChange(e) {
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          setValues(values => ({
               ...values,
               [key]: value
          }));
     }

     function handleSubmit(e) {
          e.preventDefault();
          setSending(true);
          console.log(values);
          Inertia.post(route('password.update'), values).then(() => {
               setSending(false);
          });
     }

     return (
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
               <Helmet>
                    <title>{`${app.name} | Reset Password`}</title>
               </Helmet>
               <FlashMessages />
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <form onSubmit={handleSubmit}>
                         <TextInput
                              className="mt-4"
                              label="Email"
                              name="email"
                              type="email"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.email}
                              value={values.email}
                              onChange={handleChange}
                         />
                         <TextInput
                              className="mt-4"
                              label="Password"
                              name="password"
                              type="password"
                              disable={false}
                              must={true}
                              errors={errors.password}
                              value={values.password}
                              onChange={handleChange}
                         />
                         <TextInput
                              className="mt-4"
                              label="Confirm Password"
                              name="password_confirmation"
                              type="password"
                              disable={false}
                              must={true}
                              errors={errors.password_confirmation}
                              value={values.password_confirmation}
                              onChange={handleChange}
                         />
                         <div className="flex items-center justify-end mt-4">
                              <LoadingButton type="submit" loading={sending} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                   Reset Password
                              </LoadingButton>
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default ResetPassword;
