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

function ForgotPassword() {
     const { app, flash } = usePage().props;
     const [sent, setSent] = useState(false);
     const { data, setData, post, processing, errors } = useForm({
          email: ''
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('password.email')).then(() => {
               setSent(true);
          });
     }

     return (
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
               <Helmet>
                    <title>{`${app.name} | Forgot Password`}</title>
               </Helmet>
               <FlashMessages />
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <div className="mb-4 text-sm text-gray-600">
                         Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                    </div>
                    {!sent && (<div className="py-4 text-center text-sm font-medium text-green-500">
                         An e-mail has been sent to you. Please verify your e-mail address.
                    </div>)}
                    <form onSubmit={handleSubmit}>
                         <TextInput
                              className=""
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
                         <div className="flex items-center justify-end mt-4">
                              <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150">
                                   Email Password Reset Link
                              </LoadingButton>
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default ForgotPassword;
