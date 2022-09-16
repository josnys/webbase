import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
import Logo from '@/Shared/Logo';
import FlashMessages from '@/Shared/FlashMessages';

function ResetPassword() {
     const { app, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          email: info.email,
          token: info._token,
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
               <Head>
                    <title>Reset Password</title>
               </Head>
               <FlashMessages />
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <form onSubmit={handleSubmit}>
                         <TextInputSimple
                              className=""
                              label="Email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              disable={false}
                              readonly={false}
                              must={true}
                              focus={true}
                              errors={errors.email}
                              value={data.email}
                              onChange={e => setData('email', e.target.value)}
                         />
                         <TextInputSimple
                              className="mt-4"
                              label="Password"
                              name="password"
                              type="password"
                              placeholder="****"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.password}
                              value={data.password}
                              onChange={e => setData('password', e.target.value)}
                         />
                         <TextInputSimple
                              className="mt-4"
                              label="Confirm Password"
                              name="password_confirmation"
                              type="password"
                              placeholder="****"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.password_confirmation}
                              value={data.password_confirmation}
                              onChange={e => setData('password_confirmation', e.target.value)}
                         />
                         <div className="flex items-center justify-end mt-4">
                              <ButtonSubmitSimple caption="Reset Password" loading={processing} icon={null} />
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default ResetPassword;
