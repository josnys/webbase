import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenu from './MainMenu';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import NetworkBoundary from "NetworkBoundary";

export default function Layout({ children, header }) {
     const { app } = usePage().props;
     return (
          <React.Fragment key="layout">
               <div className="flex flex-col">
                    <div className="h-screen flex flex-col">
                         <NetworkBoundary>
                              <div className="md:flex">
                                   <TopHeader />
                                   <BottomHeader>Admin | {header}</BottomHeader>
                              </div>
                              <div className="flex flex-grow overflow-hidden">
                                   <MainMenu className="bg-slate-300 flex-shrink-0 w-24 p-2 hidden md:block overflow-y-auto" />
                                   {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
                                   <div className="w-full overflow-hidden p-4 overflow-y-auto">
                                        {children}
                                   </div>
                              </div>
                         </NetworkBoundary>
                    </div>
               </div>
          </React.Fragment>
     );
}
