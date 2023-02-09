import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default ({ ...props }) => {
     const { auth, app } = usePage().props;
     const [menuOpened, setMenuOpened] = useState(false);
     return (
          <div className="flex items-center justify-between w-full p-4 text-sm md:py-0 md:px-12 d:text-md">
               <div className="mt-1 mr-4">
                    <span className="font-semibold leading-tight text-gray-700 text-md">{ props.children }</span>
               </div>
               <div className="relative">
                    <div className="flex items-center text-gray-500 cursor-pointer select-none group" onClick={() => setMenuOpened(true)}>
                         <span className="mr-1">{auth.user.username}</span>
                         <button className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300">
                              {!auth.user.avatar && (<img src={`https://ui-avatars.com/api/?name=${auth.user.name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={auth.user.name} className="w-8 h-8 rounded-full" />)}
                              {auth.user.avatar && (<img src={`${auth.user.avatar}`} alt={auth.user.name} className="w-8 h-8 rounded-full" />)}
                         </button>
                    </div>
                    <div className={menuOpened ? '' : 'hidden'} onClick={() => setMenuOpened(false)}>
                         <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm bg-white rounded shadow-xl whitespace-nowrap">
                              <div className="block px-4 py-2 text-xs text-gray-500">Manage Account</div>
                              <div className="flex items-center px-3">
                                   <div className="font-semibold text-gray-700">{auth.user.name}</div>
                              </div>
                              <Link href={route('profile')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                   My Profile
                              </Link>
                              <div className="border-t border-gray-200"></div>
                              {auth.user.can.admin && (<Link href={route('home')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                   Back Home
                              </Link>)}
                              <div className="border-t border-gray-200"></div>
                              <Link href={route('logout')} className="block w-full px-6 py-2 text-gray-600 hover:bg-red-300 hover:text-red-700 hover:font-semibold" as="button" method="post">
                                   Logout
                              </Link>
                         </div>
                         <div
                              onClick={() => {
                                   setMenuOpened(false);
                              }}
                              className="fixed inset-0 z-10 bg-black opacity-25">
                         </div>
                    </div>
               </div>
          </div>
     );
};
