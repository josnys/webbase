import React from 'react';
import { usePage, useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Shared/AdminLayout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';

const ChangePassword = () => {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, errors } = useForm({
          current_password: '',
          password: '',
          password_confirmation: '',
          pin: ''
     });

     function handleSubmit(e) {
          e.preventDefault();
          put(route('admin.user.post.resetpassword', info.id));
     }

     return (
          <React.Fragment key="uprofile">
               <Head>
                    <title>Change User Password</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Change User Password</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   You are about to change <span className="font-semibold">{info.name}</span> password. Please make sure to communicate the new one to the user to be able to log back in the system.
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.user.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
                                             <TextInputSimple
                                                  className="block w-full mt-4"
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
                                                  className="block w-full mt-4"
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
                                             <TextInputSimple
                                                  className="block w-full mt-4"
                                                  label="PIN"
                                                  name="pin"
                                                  type="text"
                                                  placeholder="1234"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.pin}
                                                  value={data.pin}
                                                  onChange={e => setData('pin', e.target.value)}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 text-right rounded-b bg-slate-100 sm:px-6">
                                   <ButtonSubmitSimple caption="Change Password" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
ChangePassword.layout = page => <AdminLayout children={page} header={'Change User Password'} />;

export default ChangePassword;
