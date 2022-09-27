import React, { useState } from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Admin/Layout';
import DataContainer from '@/Shared/DataContainer';
import DropdownButton from '@/Shared/DropdownButton';
import { ButtonLinkSimple } from '@/Shared/Buttons';
import FlashMessages from '@/Shared/FlashMessages';
import DataTable from '@/Shared/Admin/DataTable';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';

const Index = () => {
     const { auth, info } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Head>
                    <title>Roles & Permission</title>
               </Head>
               <DataContainer>
                    <div className="col-span-12 p-2 border-b">
                         <InertiaLink className="font-semibold text-md text-gray-600 hover:text-gray-700 leading-tight" href={route('home')}>Dashboard</InertiaLink> |
                         <InertiaLink className="font-semibold text-md text-gray-600 hover:text-gray-700 leading-tight" href={route('user.index')}> Users</InertiaLink> |
                         <span className="text-md text-gray-600 leading-tight"> Roles & Permissions</span>
                    </div>
                    <div className="col-span-12 items-center">
                         <FlashMessages />
                    </div>
                    <div className="col-span-12">
                         {info.access.create_role && <ButtonLinkSimple caption={'Add Role'} icon="plus" link={'role.create'} linkParams={''} />}
                         <div className="float-right">
                              <ButtonLinkSimple caption={'Back'} icon="back" link={'user.index'} linkParams={''} />
                         </div>
                         {info.access.create_permission && <div className="float-right">
                              <ButtonLinkSimple caption={'Permissions'} icon="plus" link={'permission.create'} linkParams={''} />
                         </div>}
                    </div>
                    <DataTable header={info.header} showNoData={info.roles.data.length}>
                         {info.roles.data.map(({id, name, display, description}) => {
                              return <tr key={id}>
                                   <td className="border px-2 py-1">{display}</td>
                                   <td className="border px-2 py-1">{name}</td>
                                   <td className="border px-2 py-1">{description}</td>
                                   <td className="border px-2 py-1">
                                        <DropdownButton caption="Actions" color="blue">
                                             {info.access.update_role && (<InertiaLink href={route('role.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} /> Edit
                                             </InertiaLink>)}
                                             {info.access.assign_permission && (<InertiaLink href={route('role.get.assign', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} /> Assign Permission
                                             </InertiaLink>)}
                                        </DropdownButton>
                                   </td>
                              </tr>
                         })}
                    </DataTable>
                    <Pagination links={info.roles.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Roles & Permissions'} />;

export default Index;
