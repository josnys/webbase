import React from 'react';
import { usePage, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import RoleForm from './RoleForm';

function EditRole() {
     const { auth, info } = usePage().props;

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
                         <RoleForm />
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
EditRole.layout = page => <AdminLayout children={page} header={'Edit Role'} />;

export default EditRole;
