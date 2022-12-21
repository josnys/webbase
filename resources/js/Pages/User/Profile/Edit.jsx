import React from 'react';
import { usePage, Head } from '@inertiajs/inertia-react';
import UserLayout from '@/Shared/UserLayout';
import ProfileEditCard from '@/Pages/Components/ProfileEditCard';
import PasswordEditCard from '@/Pages/Components/PasswordEditCard';
import Separator from '@/Shared/Admin/Separator';

const Edit = () => {
     const { auth, errors } = usePage().props;
     return (
          <React.Fragment key="uprofile">
               <Head>
                    <title>Profile</title>
               </Head>
               <ProfileEditCard />
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Edit.layout = page => <UserLayout children={page} header={'Profile'} />;

export default Edit;
