import React from 'react';
import { Link, usePage, Head } from '@inertiajs/react';
import AdminLayout from '@/Shared/AdminLayout';
import DataContainer from '@/Shared/DataContainer';
import PermissionForm from './PermissionForm';
import Pagination from '@/Shared/Pagination';
import Separator from '@/Shared/Admin/Separator';
import DataTable from '@/Shared/Admin/DataTable';
import Icon from '@/Shared/Icon';

function CreatePermission() {
     const { auth, info } = usePage().props;

     return (
          <React.Fragment key="permission-c">
               <Head>
                    <title>Permissions</title>
               </Head>
               <PermissionForm />
               <Separator />
               <DataContainer>
                    <div className="col-span-12">
                         <h3 className="text-lg font-medium text-gray-900">Permission's List <span className="float-right text-sm font-medium text-gray-600">{info.permissions.data.length} in total</span></h3>
                    </div>
                    <DataTable header={info.header} showNoData={info.permissions.data.length}>
                         {info.permissions.data.map(({id, name, display, description}, i) => {
                              return <tr key={i}>
                                   <td className="px-2 py-1 border">{display}</td>
                                   <td className="px-2 py-1 border">{name}</td>
                                   <td className="px-2 py-1 border">{description}</td>
                                   <td className="px-2 py-1 border">
                                        {info.access.edit && (<Link href={route('admin.permission.edit', id)} className="inline-flex items-center px-1 py-1 mr-2 text-sm rounded bg-slate-200 hover:bg-slate-300 text-slate-600">
                                             <Icon name={'edit'} className={'fill-current w-4 h-4 mr-2'} />
                                             Edit
                                        </Link>)}
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
CreatePermission.layout = page => <AdminLayout children={page} header={'Permissions'} />;

export default CreatePermission;
