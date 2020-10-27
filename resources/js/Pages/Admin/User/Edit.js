import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '../../../Shared/Layout';
import TextInput from '../../../Shared/TextInput';
import FileInput from '../../../Shared/FileInput';
import ProfileCard from '../../../Shared/ProfileCard';
import DataCard from '../../../Shared/DataCard';
import LoadingButton from '../../../Shared/LoadingButton';

const Edit = () => {
     const { auth, errors, data } = usePage().props;
     const [sending, setSending] = useState(false);

     const [values, setValues] = useState({
          name: data.name || '',
          username: data.username || '',
          email: data.email || '',
          avatar: data.avatar
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
          Inertia.post(route('user.update', data.id), values).then(() => {
               setSending(false);
          });
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Edit</title>
               </Helmet>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Edit User</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Edit user's account
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
                                                   label="Name"
                                                   name="name"
                                                   type="text"
                                                   disable={false}
                                                   readonly={false}
                                                   must={true}
                                                   errors={errors.name}
                                                   value={values.name}
                                                   onChange={handleChange}
                                              />
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Userame"
                                                   name="username"
                                                   type="text"
                                                   disable={true}
                                                   readonly={true}
                                                   errors={errors.username}
                                                   value={values.username}
                                                   onChange={handleChange}
                                              />
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Email"
                                                   name="email"
                                                   type="email"
                                                   disable={true}
                                                   readonly={true}
                                                   errors={errors.email}
                                                   value={values.email}
                                                   onChange={handleChange}
                                              />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={sending} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Update
                                   </LoadingButton>
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Edit.layout = page => <Layout children={page} header={'Edit User'} />;

export default Edit;
