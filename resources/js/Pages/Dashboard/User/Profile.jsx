import React, { useState } from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileEditCard from '@/Pages/Components/ProfileEditCard';
import PasswordEditCard from '@/Pages/Components/PasswordEditCard';
import Separator from '@/Shared/Admin/Separator';

const Profile = () => {
     const { auth, errors } = usePage().props;
     return (
          <React.Fragment key="uprofile">
               <Head>
                    <title>Profile</title>
               </Head>
               <ProfileEditCard />
               <Separator />
               <PasswordEditCard />
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Profile.layout = page => <Layout children={page} header={'Profile'} />;

export default Profile;
