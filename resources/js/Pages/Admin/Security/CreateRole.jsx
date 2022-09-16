import React, { useState } from 'react';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import DataContainer from '@/Shared/DataContainer';
import { TextInputSimple, TextAreaSimple } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import { createSlug } from '@/utils';

function CreateRole() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, reset, errors } = useForm({
          id: null,
          name: '',
          display: '',
          description: ''
     });

     function handleFocusOut(e){
          const value = e.target.value;
          setData('name', createSlug(value));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('role.store'), {
               onSuccess: () => reset()
          });
     }

     return (
          <React.Fragment key="permission-c">
               <Head>
                    <title>Create Role</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Add Role</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Use the form to add roles to the system. These role will be used to defined the level of access of each users
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3 gap-3">
                                        <div className="col-span-12 text-right">
                                             <ButtonLinkSimple caption={'Back'} icon="back" link={'security.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
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
                                                   onBlur={handleFocusOut}
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
                                   <ButtonSubmitSimple caption="Save" loading={processing} icon={null} />
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
CreateRole.layout = page => <Layout children={page} header={'Create Role'} />;

export default CreateRole;
