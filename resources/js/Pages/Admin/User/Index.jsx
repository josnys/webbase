import React, { useState } from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import FlashMessages from '@/Shared/FlashMessages';
import DataContainer from '@/Shared/DataContainer';
import { ButtonLinkSimple } from '@/Shared/Buttons';
import DataTable from '@/Shared/Admin/DataTable';
import DropdownButton from '@/Shared/DropdownButton';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';
import { can } from '@/utils';

const Index = () => {
     const { auth, info } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Head>
                    <title>Users</title>
               </Head>
               <DataContainer>
                    <div className="col-span-12 p-2 border-b">
                         <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Users</span>
                    </div>
                    <div className="col-span-12 items-center">
                         <FlashMessages />
                    </div>
                    <div className="col-span-12">
                         {can(auth.user, 'create-user') && (<ButtonLinkSimple caption={'Add User'} icon="plus" link={'user.create'} linkParams={''} />)}
                         {can(auth.user, 'read-role') && (<div className="float-right">
                              <ButtonLinkSimple caption={'Roles & Permissions'} icon="key" link={'security.index'} linkParams={''} />
                         </div>)}
                    </div>
                    <DataTable header={info.header} showNoData={info.users.data.length}>
                         {info.users.data.map(({id, code, name, username, email, avatar, roles}) => {
                              return <tr key={id}>
                                   <td className="border px-2 py-1">
                                        {!avatar && (<img src={`https://ui-avatars.com/api/?name=${name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={name} className="mx-auto h-8 w-8 rounded-full" />)}
                                        {avatar && (<img src={avatar} alt={name} className="mx-auto h-6 w-6 rounded-full" />)}
                                   </td>
                                   <td className="border px-2 py-1">{code}</td>
                                   <td className="border px-2 py-1">{name}</td>
                                   <td className="border px-2 py-1">{username}</td>
                                   <td className="border px-2 py-1">{email}</td>
                                   <td className="border px-2 py-1">{roles.join(', ')}</td>
                                   <td className="border px-2 py-1">
                                        <DropdownButton caption="Actions" color="blue">
                                             {can(auth.user, 'update-user') && (<InertiaLink href={route('user.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Edit
                                             </InertiaLink>)}
                                             {can(auth.user, 'change-user-password') && (<InertiaLink href={route('user.get.resetpassword', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'key'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Change Password
                                             </InertiaLink>)}
                                             {can(auth.user, 'assign-role') && (<InertiaLink href={route('user.get.role', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
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
Index.layout = page => <Layout children={page} header={'Users'} />;

export default Index;
