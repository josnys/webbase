import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
import Logo from '@/Shared/Logo';

function VerifyEmail() {
     const { app } = usePage().props;
     const [sent, setSent] = useState(false);
     const { data, setData, post, processing, errors } = useForm({
          email: '',
     });

     function handleSubmit(e) {
          e.preventDefault();
          setSent(false);
          post(route('verification.send'), {
               onSuccess: () => setSent(true)
          });
     }

     return (
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
               <Head>
                    <title>Verify Email</title>
               </Head>
               <Logo className="w-12 h-12" />
               <AuthCard>
                    {!sent && (<div className="mb-4 text-sm text-gray-600 text-justify">
                      Thanks for signing up! Before getting started, could you verify your
                      email address by clicking on the link we just emailed to you? If you
                      didn't receive the email, we will gladly send you another.
                    </div>)}
                    {sent && (<div className="mb-4 font-medium text-sm text-green-600 text-justify">
                      A new verification link has been sent to the email address you
                      provided during registration.
                    </div>)}
                    <form onSubmit={handleSubmit}>
                         <div className="flex items-center justify-center mt-4">
                              <ButtonSubmitSimple caption="Resend Verification Email" loading={processing} icon={null} />
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default VerifyEmail;
