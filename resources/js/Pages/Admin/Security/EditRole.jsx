import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { TextInputSimple, TextAreaSimple } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';

function EditRole() {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, reset, errors } = useForm({
          id: info.id,
          name: info.name || '',
          display: info.display || '',
          description: info.description || ''
     });

     function handleSubmit(e) {
          e.preventDefault();
          put(route('admin.role.update', info.id));
     }

     return (
          <React.Fragment key="permission-c">
               <Head>
                    <title>Edit Role</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Edit Role</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Use the form to edit roles to the system. These role will be used to defined the level of access of each users
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3 gap-3">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.security.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                             <TextInputSimple
                                                   className="block w-full"
                                                   label="Display Name"
                                                   name="display"
                                                   type="text"
                                                   placeholder="Administrator"
                                                   disable={false}
                                                   readonly={false}
                                                   must={true}
                                                   focus={true}
                                                   errors={errors.display}
                                                   value={data.display}
                                                   onChange={e => setData('display', e.target.value)}
                                              />
                                              <TextInputSimple
                                                  className="mt-4 block w-full"
                                                  label="Name"
                                                  name="name"
                                                  type="text"
                                                  placeholder="administrator"
                                                  disable={false}
                                                  readonly={true}
                                                  must={false}
                                                  errors={errors.name}
                                                  value={data.name}
                                                  onChange={e => setData('name', e.target.value)}
                                             />
                                             <TextAreaSimple
                                                  className="mt-4 block w-full"
                                                  label="Description"
                                                  name="description"
                                                  placeholder="Write a description to the role"
                                                  errors={errors.description}
                                                  value={data.description}
                                                  onChange={e => setData('description', e.target.value)}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-slate-100 text-right sm:px-6 rounded-b">
                                   <ButtonSubmitSimple caption="Update" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
EditRole.layout = page => <AdminLayout children={page} header={'Edit Role'} />;

export default EditRole;
