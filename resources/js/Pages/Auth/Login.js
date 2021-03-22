import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import AuthCard from '../../Shared/AuthCard';
import TextInput from '../../Shared/TextInput';
import LoadingButton from '../../Shared/LoadingButton';
import Logo from '../../Shared/Logo';

function Login() {
     const { errors, app } = usePage().props;
     const [sending, setSending] = useState(false);
     const [values, setValues] = useState({
          email: '',
          password: '',
          remember: true
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
          Inertia.post(route('login'), values).then(() => {
               setSending(false);
          });
     }

     return (
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
               <Helmet>
                    <title>{`${app.name} | Login`}</title>
               </Helmet>
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <h1 className="text-lg text-gray-600 font-semibold">Login</h1>
                    <form className="mt-4" onSubmit={handleSubmit}>
                         <TextInput
                              className=""
                              label="Email or Username"
                              name="email"
                              type="text"
                              disable={false}
                              readonly={false}
                              must={false}
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
                              readonly={false}
                              must={false}
                              errors={errors.password}
                              value={values.password}
                              onChange={handleChange}
                         />

                         <div className="block mt-4">
                              <label className="flex items-center" htmlFor="perms">
                                   <input name="remember" id="remember" className="form-checkbox" type="checkbox" checked={values.remember} onChange={handleChange}/>
                                   <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                              </label>
                         </div>
                         <div className="flex items-center justify-end mt-4">
                              <LoadingButton type="submit" loading={sending} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">Login</LoadingButton>
                         </div>
                    </form>
               </AuthCard>
               <div className="mt-4">
                    <p className="text-sm text-right text-gray-500 font-semibold">{app.system.name} <span className="text-xs font-base">{app.system.version}</span></p>
               </div>
          </div>
     );
}

export default Login;
