import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputIcon, CheckInput } from '@/Shared/Inputs';
import Logo from '@/Shared/Logo';
import FlashMessages from '@/Shared/FlashMessages';

function Login() {
     const { app } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          email: '',
          password: '',
          remember: true
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('login'));
     }

     return (
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
               <Head>
                    <title>Login</title>
                    <meta name="description" content="Please Login to access." />
               </Head>
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <h1 className="text-lg text-gray-600 font-semibold">Login</h1>
                    <FlashMessages />
                    <form className="mt-4" onSubmit={handleSubmit}>
                         <TextInputIcon
                              placeholder="Your E-mail or Username"
                              icon="user"
                              name="email"
                              type="text"
                              disable={false}
                              readonly={false}
                              focus={true}
                              must={true}
                              errors={errors.email}
                              value={data.email}
                              onChange={e => setData('email', e.target.value)}
                         />
                         <TextInputIcon
                              className="mt-4"
                              placeholder="****"
                              icon="lock"
                              name="password"
                              type="password"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.password}
                              value={data.password}
                              onChange={e => setData('password', e.target.value)}
                         />
                         <CheckInput className="mt-4" label="Remember Me" checked={data.remember} onChange={e => setData('remember', !data.remember)} />

                         <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-slate-500">Don't have an account, <InertiaLink className="text-slate-600 font-base hover:underline" href={route('register')}>register</InertiaLink> </span>
                              <ButtonSubmitSimple caption="Login" loading={processing} icon={null} />
                         </div>
                    </form>
                    <div className="flex items-center justify-center border-t mt-4 px-4 py-3 text-right sm:px-6 rounded-b">
                         <span className="text-sm text-slate-500">Forgot your password, <InertiaLink className="text-slate-600 font-base hover:underline" href={route('password.request')}>click to reset it</InertiaLink> </span>
                    </div>
               </AuthCard>
               <div className="mt-4">
                    <p className="text-sm text-right text-gray-500 font-medium">{app.system.name} <span className="text-xs font-base">{app.system.version}</span></p>
               </div>
          </div>
     );
}

export default Login;
