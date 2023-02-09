import React, { useState } from 'react';
import { usePage, useForm, Head } from '@inertiajs/react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
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
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
               <Head>
                    <title>Verify Email</title>
               </Head>
               <Logo className="w-12 h-12" />
               <AuthCard>
                    {!sent && (<div className="mb-4 text-sm text-justify text-gray-600">
                      Thanks for signing up! Before getting started, could you verify your
                      email address by clicking on the link we just emailed to you? If you
                      didn't receive the email, we will gladly send you another.
                    </div>)}
                    {sent && (<div className="mb-4 text-sm font-medium text-justify text-green-600">
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
