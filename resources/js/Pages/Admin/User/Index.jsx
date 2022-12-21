import React from 'react';
import { Link, usePage, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import FlashMessages from '@/Shared/FlashMessages';
import DataContainer from '@/Shared/DataContainer';
import { ButtonLinkSimple } from '@/Shared/Buttons';
import DataTable from '@/Shared/Admin/DataTable';
import DropdownButton from '@/Shared/DropdownButton';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';
import { joinValueByKey } from '@/utils';

const Index = () => {
     const { info } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Head>
                    <title>Users</title>
               </Head>
               <DataContainer>
                    <div className="col-span-12 p-2 border-b">
                         <Link className="font-semibold leading-tight text-gray-700 text-md hover:text-gray-800" href={route('admin.dashboard')}>Dashboard</Link> | <span className="leading-tight text-gray-700 text-md">Users</span>
                    </div>
                    <div className="items-center col-span-12">
                         <FlashMessages />
                    </div>
                    <div className="col-span-12">
                         {info.access.create && (<ButtonLinkSimple caption={'Add User'} icon="plus" link={'admin.user.create'} linkParams={''} />)}
                         {info.access.role_group && (<div className="float-right">
                              <ButtonLinkSimple caption={'Roles & Permissions'} icon="key" link={'admin.security.index'} linkParams={''} />
                         </div>)}
                    </div>
                    <DataTable header={info.header} showNoData={info.users.data.length}>
                         {info.users.data.map(({id, person, username, email, roles}) => {
                              return <tr key={id}>
                                   <td className="px-2 py-1 border">
                                        {!person.avatar && (<img src={`https://ui-avatars.com/api/?name=${person.name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={person.name} className="w-4 h-4 mx-auto rounded-full" />)}
                                        {person.avatar && (<img src={person.avatar} alt={person.name} className="w-4 h-4 mx-auto rounded-full" />)}
                                   </td>
                                   <td className="px-2 py-1 border">{person.code}</td>
                                   <td className="px-2 py-1 border">{person.name}</td>
                                   <td className="px-2 py-1 border">{username}</td>
                                   <td className="px-2 py-1 border">{email}</td>
                                   <td className="px-2 py-1 border">{joinValueByKey(roles, 'display_name')}</td>
                                   <td className="px-2 py-1 border">
                                        <DropdownButton caption="Actions" color="blue">
                                             {info.access.edit && (<Link href={route('admin.user.edit', id)} className="flex px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Edit
                                             </Link>)}
                                             {info.access.change_pass && (<Link href={route('admin.user.get.resetpassword', id)} className="flex px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'key'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Change Password
                                             </Link>)}
                                             {info.access.assign_role && (<Link href={route('admin.user.get.role', id)} className="flex px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} />
                                                  Assign Role
                                             </Link>)}
                                        </DropdownButton>
                                   </td>
                              </tr>
                         })}
                    </DataTable>
                    <Pagination links={info.users.meta.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <AdminLayout children={page} header={'Users'} />;

export default Index;
