import React from 'react';
import { usePage, Head } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';

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
Home.layout = page => <AdminLayout children={page} header={'Admin'} />;

export default Home;
