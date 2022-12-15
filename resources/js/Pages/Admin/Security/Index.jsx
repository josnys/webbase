import React from 'react';
import { Link, usePage, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
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
                         <Link className="font-semibold leading-tight text-gray-600 text-md hover:text-gray-700" href={route('admin.dashboard')}>Dashboard</Link> |
                         <Link className="font-semibold leading-tight text-gray-600 text-md hover:text-gray-700" href={route('admin.user.index')}> Users</Link> |
                         <span className="leading-tight text-gray-600 text-md"> Roles & Permissions</span>
                    </div>
                    <div className="items-center col-span-12">
                         <FlashMessages />
                    </div>
                    <div className="col-span-12">
                         {info.access.create_role && <ButtonLinkSimple caption={'Add Role'} icon="plus" link={'admin.role.create'} linkParams={''} />}
                         <div className="float-right">
                              <ButtonLinkSimple caption={'Back'} icon="back" link={'admin.user.index'} linkParams={''} />
                         </div>
                         {info.access.create_permission && <div className="float-right">
                              <ButtonLinkSimple caption={'Permissions'} icon="plus" link={'admin.permission.create'} linkParams={''} />
                         </div>}
                    </div>
                    <DataTable header={info.header} showNoData={info.roles.data.length}>
                         {info.roles.data.map(({id, name, display, description}) => {
                              return <tr key={id}>
                                   <td className="px-2 py-1 border">{display}</td>
                                   <td className="px-2 py-1 border">{name}</td>
                                   <td className="px-2 py-1 border">{description}</td>
                                   <td className="px-2 py-1 border">
                                        <DropdownButton caption="Actions" color="blue">
                                             {info.access.update_role && (<Link href={route('admin.role.edit', id)} className="flex px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} /> Edit
                                             </Link>)}
                                             {info.access.assign_permission && (<Link href={route('admin.role.get.assign', id)} className="flex px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                  <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} /> Assign Permission
                                             </Link>)}
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
Index.layout = page => <AdminLayout children={page} header={'Roles & Permissions'} />;

export default Index;
