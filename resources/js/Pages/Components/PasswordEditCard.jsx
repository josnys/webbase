import React, { useState } from 'react';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import { ButtonSubmitSimple } from '@/Shared/Buttons';
import { TextInputSimple } from '@/Shared/Inputs';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import axios from 'axios';

const PasswordEditCard = () => {
     const { auth, user } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          current_password: '',
          password: '',
          password_confirmation: '',
     });

     function handleSubmit(e) {
          e.preventDefault();
          post(route('profile.password', user.id));
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
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-12">
                                        <div className="col-span-12">
                                             <TextInputSimple
                                                  className="mt-4 block w-full"
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
                                                  className="mt-4 block w-full"
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
                                                  className="mt-4 block w-full"
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
                              <div className="flex items-center justify-end px-4 py-3 bg-slate-100 text-right sm:px-6 rounded-b">
                                   <ButtonSubmitSimple caption="Save" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

export default PasswordEditCard;
