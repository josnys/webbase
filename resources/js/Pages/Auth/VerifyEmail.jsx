import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
import Logo from '@/Shared/Logo';

function VerifyEmail() {
     const { app } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          email: '',
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('verification.send'));
     }

     return (
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
               <Head>
                    <title>Verify Email</title>
               </Head>
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
                         <div className="flex items-center justify-end mt-4">
                              <ButtonSubmitSimple caption="Send Reset Link" loading={processing} icon={null} />
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default VerifyEmail;
