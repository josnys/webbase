import React from 'react';
import { usePage, useForm, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import PermissionForm from './PermissionForm';

function EditPermission() {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, reset, errors } = useForm({
          id: info.id || null,
          name: info.name || '',
          display: info.display || '',
          description: info.description || '',
     });

     function handleSubmit(e) {
          e.preventDefault();
          put(route('admin.permission.update', info.id));
     }

     return (
          <React.Fragment key="permission-c">
               <Head>
                    <title>Edit Permission</title>
               </Head>
               <PermissionForm />
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
EditPermission.layout = page => <AdminLayout children={page} header={'Edit Permission'} />;

export default EditPermission;
