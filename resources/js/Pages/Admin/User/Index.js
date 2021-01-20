import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '../../../Shared/Layout';
import DataContainer from '../../../Shared/DataContainer';
import DropdownButton from '../../../Shared/DropdownButton';
import Icon from '../../../Shared/Icon';

const Index = () => {
     const { auth, errors, data } = usePage().props;
     console.log(data.data);
     return (
          <React.Fragment key="security-index">
               <Helmet>
                    <title>Users</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Users</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         <InertiaLink href={route('role.create')} className="bg-gray-300 hover:bg-gray-400 mr-2 text-gray-800 text-sm py-1 px-1 rounded inline-flex items-center">
                              <Icon name={'plus'} className={'fill-current w-4 h-4 mr-2'} />
                              Add User
                         </InertiaLink>
                    </div>
                    <table className="table-fixed col-span-12">
                         <thead className="bg-gray-400">
                              <tr>
                                   <th className="px-4 py-2"></th>
                                   <th className="px-4 py-2">Name</th>
                                   <th className="px-4 py-2">Username</th>
                                   <th className="px-4 py-2">Email</th>
                                   <th className="px-4 py-2">Roles</th>
                                   <th className="px-4 py-2"></th>
                              </tr>
                         </thead>
                         <tbody>
                              {data.data.map(({id, name, username, email, avatar, roles}) => {
                                   return <tr key={id}>
                                        <td className="border px-4 py-2">
                                             {!avatar && (<img src={`https://ui-avatars.com/api/?name=${name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={name} className="mx-auto h-8 w-8 rounded-full" />)}
                                             {avatar && (<img src={avatar} alt={name} className="mx-auto h-8 w-8 rounded-full" />)}
                                        </td>
                                        <td className="border px-4 py-2">{name}</td>
                                        <td className="border px-4 py-2">{username}</td>
                                        <td className="border px-4 py-2">{email}</td>
                                        <td className="border px-4 py-2">{roles.join(', ')}</td>
                                        <td className="border px-4 py-2">
                                             <DropdownButton caption="Actions" color="blue">
                                                  <InertiaLink href={route('user.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} />
                                                       Edit
                                                  </InertiaLink>
                                                  <InertiaLink href={route('user.get.role', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} />
                                                       Assign Role
                                                  </InertiaLink>
                                             </DropdownButton>
                                        </td>
                                   </tr>
                              })}
                              {!data.data.length && (<tr>
                                   <td colSpan="4" className="p-4 bg-blue-100 text-blue-500 text-center">No data found.</td>
                              </tr>)}
                         </tbody>
                    </table>
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Users'} />;

export default Index;
