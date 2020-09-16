import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink } from '@inertiajs/inertia-react';

function Welcome() {
     return (
          <div className="p-6 min-h-screen flex justify-center items-center">
               <div className="bg-white p-4 rounded text-center text-xl text-gray-600 shadow-xl w-full max-w-xl leading-loose">
                    Welcome to the <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Laravel 8 | TailwindCSS | InertiaJs | Reactjs</h1> scaffolded by JosnyS<br />
               <InertiaLink className="mr-2 text-xs hover:underline hover:text-blue-500" href={route('login')}>Login</InertiaLink>
                    <InertiaLink className="text-xs hover:underline hover:text-blue-500" href={route('register')}>Register</InertiaLink>
               </div>
          </div>
     );
}

export default Welcome;
