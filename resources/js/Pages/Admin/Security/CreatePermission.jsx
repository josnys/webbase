import React, { useState } from 'react';
import { InertiaLink, usePage, useForm, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import DataContainer from '@/Shared/DataContainer';
import { TextInputSimple, TextAreaSimple } from '@/Shared/Inputs';
import { ButtonSubmitSimple, ButtonLinkSimple } from '@/Shared/Buttons';
import Pagination from '@/Shared/Pagination';
import Separator from '@/Shared/Admin/Separator';
import DataTable from '@/Shared/Admin/DataTable';
import Icon from '@/Shared/Icon';
import { createSlug } from '@/utils';

function CreatePermission() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, reset, errors } = useForm({
          id: null,
          name: '',
          display: '',
          description: '',
     });

     function handleFocusOut(e){
          const value = e.target.value;
          setData('name', createSlug(value));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('permission.store'), {
               onSuccess: () => reset()
          });
     }

     return (
          <React.Fragment key="permission-c">
               <Head>
                    <title>Create Permission</title>
               </Head>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Add Permission</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Use the form to add permissions to the system. These permissions will be used to grant access to all system's functionalities
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
               <Separator />
               <DataContainer>
                    <div className="col-span-12">
                         <h3 className="text-lg font-medium text-gray-900">Permission's List <span className="float-right text-sm text-gray-600 font-medium">{info.permissions.data.length} in total</span></h3>
                    </div>
                    <DataTable header={info.header} showNoData={info.permissions.data.length}>
                         {info.permissions.data.map(({id, name, display, description}, i) => {
                              return <tr key={i}>
                                   <td className="border px-2 py-1">{display}</td>
                                   <td className="border px-2 py-1">{name}</td>
                                   <td className="border px-2 py-1">{description}</td>
                                   <td className="border px-2 py-1">
                                        <InertiaLink href={route('permission.edit', id)} className="bg-slate-200 hover:bg-slate-300 mr-2 text-slate-600 text-sm py-1 px-1 rounded inline-flex items-center">
                                             <Icon name={'edit'} className={'fill-current w-4 h-4 mr-2'} />
                                             Edit
                                        </InertiaLink>
                                   </td>
                              </tr>
                         })}
                    </DataTable>
                    <Pagination links={info.permissions.links} />
               </DataContainer>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
CreatePermission.layout = page => <Layout children={page} header={'Create Permission'} />;

export default CreatePermission;
