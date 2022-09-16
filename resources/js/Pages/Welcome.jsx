import React from 'react';
import { InertiaLink, usePage, Head } from '@inertiajs/inertia-react';

function Welcome() {

     return (
          <React.Fragment key="welcom">
               <Head>
                    <title>Welcome Page</title>
                    <meta name="description" content="The Welcome Page" />
               </Head>
               <div className="p-6 min-h-screen flex justify-center items-center">
                    <div className="bg-white p-4 rounded text-center text-lg text-gray-500 shadow-xl w-full max-w-xl leading-loose">
                         Welcome to the <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500">Laravel 9 | Fortify | TailwindCSS 3 | InertiaJs | Reactjs</h1>
                    scaffolded by <InertiaLink className="hover:text-purple-600" href="https://twitter.com/josnyS">JosnyS</InertiaLink><br />
                    <InertiaLink className="mr-2 text-xs hover:underline hover:text-blue-500" href={route('login')}>Login</InertiaLink>
                         <InertiaLink className="text-xs hover:underline hover:text-blue-500" href={route('register')}>Register</InertiaLink>
                    </div>
               </div>
          </React.Fragment>
     );
}

export default Welcome;
