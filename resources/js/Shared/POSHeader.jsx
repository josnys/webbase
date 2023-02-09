import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import Indicator from './Indicator';
import { Offline, Online } from "react-detect-offline";

export default ({ ...props }) => {
     const { app, auth, data } = usePage().props;

     return (
          <div className="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md">
               <div className="mt-2 mb-2 mr-4">
                    <span className="leading-tight text-gray-600 font-italic text-md">{ props.children }</span><span className="font-semibold leading-tight text-gray-700 text-md"> | {auth.user.fname}</span>
               </div>
               <div className="relative">
                    <div className="text-right">
                         <Link href={route('store.show', data.store.id)}>
                              {app.name}<br />
                              <div className="flex text-xs text-gray-400">
                                   <span className="flex items-center justify-content-center">
                                        <Online>
                                             <Indicator color="green" size="2" />
                                        </Online>
                                        <Offline>
                                             <Indicator color="red" size="2" />
                                        </Offline>
                                        {app.system.name} {app.system.version}
                                   </span>
                              </div>
                         </Link>
                    </div>
               </div>
          </div>
     );
};
