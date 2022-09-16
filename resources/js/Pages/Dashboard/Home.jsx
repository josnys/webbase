import React from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';

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
Home.layout = page => <Layout children={page} header={'Dashboard'} />;

export default Home;
