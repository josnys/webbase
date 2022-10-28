import React, { useState } from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import FlashMessages from '@/Shared/FlashMessages';
import DataContainer from '@/Shared/DataContainer';
import { ButtonLinkSimple } from '@/Shared/Buttons';
import DataTable from '@/Shared/Admin/DataTable';
import DropdownButton from '@/Shared/DropdownButton';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';

const Index = () => {
     const { auth, info } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Head>
                    <title>Users</title>
               </Head>
               <DataContainer>
                    <div className="col-span-12 p-2 border-b">
                         <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.dashboard')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Users</span>
                    </div>
                    <div className="col-span-12 items-center">
                         <FlashMessages />
                    </div>
                    <div className="col-span-12">
                         {info.access.create && (<ButtonLinkSimple caption={'Add User'} icon="plus" link={'admin.user.create'} linkParams={''} />)}
                         {info.access.role_group && (<div className="float-right">
                              <ButtonLinkSimple caption={'Roles & Permissions'} icon="key" link={'admin.security.index'} linkParams={''} />
                         </div>)}
                    </div>
                    <DataTable header={info.header} showNoData={info.users.data.length}>
                         {info.users.data.map(({id, code, name, username, email, avatar, roles}) => {
                              return <tr key={id}>
                                   <td className="border px-2 py-1">
                                        {!avatar && (<img src={`https://ui-avatars.com/api/?name=${name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={name} className="mx-auto h-4 w-4 rounded-full" />)}
                                        {avatar && (<img src={avatar} alt={name} className="mx-auto h-4 w-4 rounded-full" />)}
                                   </td>
                                   <td className="border px-2 py-1">{code}</td>
                                   <td className="border px-2 py-1">{name}</td>
                                   <td className="border px-2 py-1">{username}</td>
                                   <td className="border px-2 py-1">{email}</td>
                                   <td className="border px-2 py-1">{roles.join(', ')}</td>
                                   <td className="border px-2 py-1">
                                        <DropdownButton caption="Actions" color="blue">
                                             {info.access.edit && (<InertiaLink href={route('admin.user.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Edit
                                             </InertiaLink>)}
                                             {info.access.change_pass && (<InertiaLink href={route('admin.user.get.resetpassword', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'key'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Change Password
                                             </InertiaLink>)}
                                             {info.access.assign_role && (<InertiaLink href={route('admin.user.get.role', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Assign Role
                                             </InertiaLink>)}
                                        </DropdownButton>
                                   </td>
                              </tr>
                         })}
                    </DataTable>
                    <Pagination links={info.users.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <AdminLayout children={page} header={'Users'} />;

export default Index;
