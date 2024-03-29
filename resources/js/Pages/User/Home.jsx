import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import UserLayout from '@/Shared/UserLayout';

const Home = () => {
     const { auth } = usePage().props;
     return (
          <div>
               <Head>
                    <title>Dashboard</title>
               </Head>

          </div>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Home.layout = page => <UserLayout children={page} header={'Dashboard'} />;

export default Home;
