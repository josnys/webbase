import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';
import TextInput from '../../Shared/TextInput';
import FileInput from '../../Shared/FileInput';
import ProfileCard from '../../Shared/ProfileCard';
import DataCard from '../../Shared/DataCard';
import LoadingButton from '../../Shared/LoadingButton';
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
          // axios.post(route('profile.password', data.id), values).then((response) => {
          //      setSaved(true);
          //      setSending(false);
          // }).catch((error) => {
          //      setValues(values => ({
          //           ...values,
          //           errors: error.response.data.errors
          //      }));
          //      setSending(false);
          // });
     }
     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Profile</title>
               </Helmet>
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
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                             <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Current Password"
                                                   name="current_password"
                                                   type="password"
                                                   disable={false}
                                                   readonly={false}
                                                   must={true}
                                                   errors={errors.current_password}
                                                   value={data.current_password}
                                                   onChange={e => setData('current_password', e.target.value)}
                                              />
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="New Password"
                                                   name="password"
                                                   type="password"
                                                   disable={false}
                                                   readonly={false}
                                                   must={true}
                                                   errors={errors.password}
                                                   value={data.password}
                                                   onChange={e => setData('password', e.target.value)}
                                              />
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Confirm Password"
                                                   name="password_confirmation"
                                                   type="password"
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
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Save
                                   </LoadingButton>
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

export default PasswordEditCard;
