import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';

const Home = () => {
     const { auth } = usePage();
     return (
          <div>
               <Helmet>
                    <title>Dashboard</title>
               </Helmet>
               <h1 className="mb-8 font-bold text-3xl">Dashboard</h1>
               <p className="mb-12 leading-normal">

               </p>
          </div>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Home.layout = page => <Layout children={page} />;

export default Home;
