import React, { useState } from 'react';
import { usePage, useForm, Head } from '@inertiajs/inertia-react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
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
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
               <Head>
                    <title>Forgot Password</title>
               </Head>
               <FlashMessages />
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <div className="mb-4 text-sm text-gray-600">
                         Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                    </div>
                    {sent && (<div className="py-4 text-sm font-medium text-center text-green-600">
                         An e-mail has been sent to you. Please verify your e-mail address.
                    </div>)}
                    <form onSubmit={handleSubmit}>
                         <TextInputSimple
                              className="mt-4"
                              label="Email"
                              name="email"
                              type="email"
                              placeholder="jdoe@app.com"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.email}
                              value={data.email}
                              onChange={e => setData('email', e.target.value)}
                         />
                         <div className="flex items-center justify-end mt-4">
                              <ButtonSubmitSimple caption="Email Password Reset Link" loading={processing} icon={null} />
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default ForgotPassword;
