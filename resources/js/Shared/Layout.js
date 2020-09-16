import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import MainMenu from './MainMenu';
import FlashMessages from './FlashMessages';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

export default function Layout({ children }) {
     const { app } = usePage();
     return (
          <React.Fragment key="layout">
               <Helmet titleTemplate={`${app.name} | %s`} />
               <div className="flex flex-col">
                    <div className="h-screen flex flex-col">
                         <div className="md:flex">
                              <TopHeader />
                              <BottomHeader />
                         </div>
                         <div className="flex flex-grow overflow-hidden">
                              <MainMenu className="bg-gray-800 flex-shrink-0 w-56 p-12 hidden md:block overflow-y-auto" />
                              {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
                              <div className="w-full overflow-hidden px-4 py-8 md:p-12 overflow-y-auto">
                                   <FlashMessages />
                                   {children}
                              </div>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
}
