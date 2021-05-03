import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import AuthCard from '@/Shared/AuthCard';
import TextInput from '@/Shared/TextInput';
import LoadingButton from '@/Shared/LoadingButton';
import Logo from '@/Shared/Logo';
import FlashMessages from '@/Shared/FlashMessages';

function ResetPassword() {
     const { app } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          email: data.email,
          token: data._token,
          password: '',
          password_confirmation:''
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('password.update')).then(() => {
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
                              value={data.email}
                              onChange={e => setData('email', e.target.value)}
                         />
                         <TextInput
                              className="mt-4"
                              label="Password"
                              name="password"
                              type="password"
                              disable={false}
                              must={true}
                              errors={errors.password}
                              value={data.password}
                              onChange={e => setData('password', e.target.value)}
                         />
                         <TextInput
                              className="mt-4"
                              label="Confirm Password"
                              name="password_confirmation"
                              type="password"
                              disable={false}
                              must={true}
                              errors={errors.password_confirmation}
                              value={data.password_confirmation}
                              onChange={e => setData('password_confirmation', e.target.value)}
                         />
                         <div className="flex items-center justify-end mt-4">
                              <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                   Reset Password
                              </LoadingButton>
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default ResetPassword;
