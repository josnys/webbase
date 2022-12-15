import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

function Welcome() {

     return (
          <React.Fragment key="welcom">
               <Head>
                    <title>Welcome Page</title>
                    <meta name="description" content="The Welcome Page" />
               </Head>
               <div className="flex items-center justify-center min-h-screen p-6">
                    <div className="w-full max-w-xl p-4 text-lg leading-loose text-center text-gray-500 bg-white rounded shadow-xl">
                         Welcome to the <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">Laravel 9 | Fortify | TailwindCSS 3 | InertiaJs | Reactjs</h1>
                    scaffolded by <Link className="hover:text-purple-600" href="https://twitter.com/josnyS">JosnyS</Link><br />
                    <Link className="mr-2 text-xs hover:underline hover:text-blue-500" href={route('login')}>Login</Link>
                         <Link className="text-xs hover:underline hover:text-blue-500" href={route('register')}>Register</Link>
                    </div>
               </div>
          </React.Fragment>
     );
}

export default Welcome;
