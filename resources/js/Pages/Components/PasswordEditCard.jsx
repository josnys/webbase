import React from 'react';
import { usePage, useForm, Link } from '@inertiajs/inertia-react';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
import FlashMessages from '@/Shared/FlashMessages';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';

const PasswordEditCard = () => {
     const { auth, user } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          current_password: '',
          password: '',
          password_confirmation: '',
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('user.password.save', user.id));
     }
     return (
          <React.Fragment key="uprofile">
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Update Password</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Ensure your account is using a long, random password to stay secure.
                              </p>
                              <Link href={route('user.profile')} className="mt-4 text-sm font-semibold text-slate-600 hover:underline">Back to Profile</Link>
                         </div>
                    </div>
                    <DataCard>
                         <FlashMessages />
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-12">
                                        <div className="col-span-12">
                                             <TextInputSimple
                                                  className="block w-full mt-4"
                                                  label="Current Password"
                                                  name="current_password"
                                                  type="password"
                                                  placeholder="****"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.current_password}
                                                  value={data.current_password}
                                                  onChange={e => setData('current_password', e.target.value)}
                                             />
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
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 text-right rounded-b bg-slate-100 sm:px-6">
                                   <ButtonSubmitSimple caption="Save" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

export default PasswordEditCard;
