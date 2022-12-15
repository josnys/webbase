import React from 'react';
import { Link, usePage, useForm, Head } from '@inertiajs/inertia-react';
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
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
               <Head>
                    <title>Login</title>
                    <meta name="description" content="Please Login to access." />
               </Head>
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <h1 className="text-lg font-semibold text-gray-600">Login</h1>
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
                              <span className="text-sm text-slate-500">Don't have an account, <Link className="text-slate-600 font-base hover:underline" href={route('register')}>register</Link> </span>
                              <ButtonSubmitSimple caption="Login" loading={processing} icon={null} />
                         </div>
                    </form>
                    <div className="flex items-center justify-center px-4 py-3 mt-4 text-right border-t rounded-b sm:px-6">
                         <span className="text-sm text-slate-500">Forgot your password, <Link className="text-slate-600 font-base hover:underline" href={route('password.request')}>click to reset it</Link> </span>
                    </div>
               </AuthCard>
               <div className="mt-4">
                    <p className="text-sm font-medium text-right text-gray-500">{app.system.name} <span className="text-xs font-base">{app.system.version}</span></p>
               </div>
          </div>
     );
}

export default Login;
