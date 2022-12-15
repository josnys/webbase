import React from 'react';
import { Link, usePage, useForm, Head } from '@inertiajs/inertia-react';
import AuthCard from '@/Shared/AuthCard';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
import Logo from '@/Shared/Logo';

function Register() {
     const { app } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          fisrt_name:'',
          last_name:'',
          username:'',
          email: '',
          password: '',
          password_confirmation:''
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('register'));
     }

     return (
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
               <Head>
                    <title>Register</title>
               </Head>
               <Logo className="w-12 h-12" />
               <AuthCard>
                    <form onSubmit={handleSubmit}>
                         <TextInputSimple
                              className=""
                              label="First Name"
                              name="first_name"
                              type="text"
                              placeholder="John"
                              disable={false}
                              readonly={false}
                              must={true}
                              focus={true}
                              errors={errors.first_name}
                              value={data.first_name}
                              onChange={e => setData('first_name', e.target.value)}
                         />
                         <TextInputSimple
                              className=""
                              label="Last Name"
                              name="last_name"
                              type="text"
                              placeholder="Doe"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.last_name}
                              value={data.last_name}
                              onChange={e => setData('last_name', e.target.value)}
                         />
                         <TextInputSimple
                              className="mt-4"
                              label="Username"
                              name="username"
                              type="text"
                              placeholder="jdoe"
                              disable={false}
                              readonly={false}
                              must={true}
                              errors={errors.username}
                              value={data.username}
                              onChange={e => setData('username', e.target.value)}
                         />
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
                         <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-slate-500">Already registered ? <Link className="text-slate-600 font-base hover:underline" href={route('login')}>Login</Link> </span>
                              <ButtonSubmitSimple caption="Register" loading={processing} icon={null} />
                         </div>
                    </form>
               </AuthCard>
          </div>
     );
}

export default Register;
