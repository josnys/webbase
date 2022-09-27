import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Logo from '@/Shared/Logo';
import MainMenu from '@/Shared/MainMenu';
import Icon from '@/Shared/Icon';

export default () => {
     const [menuOpened, setMenuOpened] = useState(false);
     const iconSimpleClasse = classNames('w-6 h-6 mr-2', {
          'stroke-slate-500 stroke-1 fill-white': false,
          'stroke-slate-500 stroke-1 fill-white hover:stroke-slate-500': true
     });

     return (
          <div className="bg-slate-300 md:flex-shrink-0 md:w-24 px-6 py-2 flex items-center justify-between md:justify-center">
               <InertiaLink className="mt-1" href="/">
                    <Logo className="text-white fill-current w-8 h-8" width="75" />
               </InertiaLink>
               <div className="relative md:hidden">
                    <Icon name="bars-3" className={iconSimpleClasse} />
                    <div className={`${menuOpened ? '' : 'hidden'} absolute right-0 z-20`}>
                         <MainMenu className="relative z-20 mt-2 px-8 py-4 pb-2 shadow-lg bg-indigo-800 rounded" />
                         <div onClick={() => {setMenuOpened(false);}} className="bg-black opacity-25 fixed inset-0 z-10"></div>
                    </div>
               </div>
          </div>
     );
};
