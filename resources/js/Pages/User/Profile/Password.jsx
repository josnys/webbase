import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import UserLayout from '@/Shared/UserLayout';
import PasswordEditCard from '@/Pages/Components/PasswordEditCard';

const Password = () => {
     const { auth, errors } = usePage().props;
     return (
          <React.Fragment key="uprofile">
               <Head>
                    <title>Change Password</title>
               </Head>
               <PasswordEditCard />
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Password.layout = page => <UserLayout children={page} header={'Change Password'} />;

export default Password;
