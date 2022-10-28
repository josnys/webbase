import React from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';
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
