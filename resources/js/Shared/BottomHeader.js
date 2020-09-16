import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Icon from './Icon';

export default () => {
     const { auth } = usePage();
     const [menuOpened, setMenuOpened] = useState(false);
     return (
          <div className="bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm d:text-md flex justify-between items-center">
               <div className="mt-1 mr-4 text-white">{auth.user.username}</div>
               <div className="relative">
                    <div className="flex items-center cursor-pointer select-none group" onClick={() => setMenuOpened(true)}>
                         <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                              <img src={`https://ui-avatars.com/api/?name=${auth.user.name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={auth.user.name} className="h-8 w-8 rounded-full" />
                         </button>
                    </div>
                    <div className={menuOpened ? '' : 'hidden'}>
                         <div className="whitespace-no-wrap absolute z-20 mt-8 left-auto top-0 right-0 py-2 shadow-xl bg-white rounded text-sm">
                              <div className="block px-4 py-2 text-xs text-gray-500">Manage Account</div>
                              <div className="flex items-center px-3">
                                   <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" class="mr-2 h-5 w-5 text-green-400">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                   </svg>
                                   <div className="text-green-300">{auth.user.name}</div>
                              </div>
                              <InertiaLink
                                   href="#" className="block px-6 py-2 hover:bg-gray-100 hover:text-gray-800">
                                   My Profile
                              </InertiaLink>
                              <div className="border-t border-gray-200"></div>
                              <InertiaLink href="#" className="block px-6 py-2 hover:bg-gray-200 hover:text-gray-800">Manage Users</InertiaLink>
                              <div className="border-t border-gray-200"></div>
                              <InertiaLink href={route('logout')} className="block px-6 py-2 gray:bg-indigo-200 hover:text-gray-800" method="post">
                                   Logout
                              </InertiaLink>
                         </div>
                         <div
                              onClick={() => {
                                   setMenuOpened(false);
                              }}
                              className="bg-black opacity-25 fixed inset-0 z-10">
                         </div>
                    </div>
               </div>
          </div>
     );
};
