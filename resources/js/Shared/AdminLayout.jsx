import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import MainMenuAdmin from './MainMenuAdmin';
import AdminTopHeader from './AdminTopHeader';
import BottomHeader from './BottomHeader';
import ErrorBoundary from './ErrorBoundary';

export default function AdminLayout({ children, header }) {
     const { app } = usePage().props;
     return (
          <React.Fragment key="layout">
               <div className="flex flex-col">
                    <div className="h-screen flex flex-col">
                         <div className="md:flex">
                              <AdminTopHeader />
                              <BottomHeader>{header}</BottomHeader>
                         </div>
                         <div className="flex flex-grow overflow-hidden">
                              <MainMenuAdmin className="bg-slate-200 flex-shrink-0 w-24 p-2 hidden md:block overflow-y-auto" />
                              {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
                              <div className="w-full overflow-hidden p-4 overflow-y-auto">
                                   <ErrorBoundary>
                                        {children}
                                   </ ErrorBoundary>
                              </div>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
}
