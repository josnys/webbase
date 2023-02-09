import React from 'react';
import { usePage } from '@inertiajs/react';
import MainMenu from './MainMenu';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import NetworkBoundary from "NetworkBoundary";

export default function Layout({ children, header }) {
     const { app } = usePage().props;
     return (
          <React.Fragment key="layout">
               <div className="flex flex-col">
                    <div className="flex flex-col h-screen">
                         <NetworkBoundary>
                              <div className="md:flex">
                                   <TopHeader />
                                   <BottomHeader>Admin | {header}</BottomHeader>
                              </div>
                              <div className="flex flex-grow overflow-hidden">
                                   <MainMenu className="flex-shrink-0 hidden w-24 p-2 overflow-y-auto bg-slate-300 md:block" />
                                   {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
                                   <div className="w-full p-4 overflow-hidden overflow-y-auto">
                                        {children}
                                   </div>
                              </div>
                         </NetworkBoundary>
                    </div>
               </div>
          </React.Fragment>
     );
}
