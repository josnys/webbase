import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
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
          <div className="flex items-center justify-between px-6 py-2 bg-slate-300 md:flex-shrink-0 md:w-24 md:justify-center">
               <Link className="mt-1" href="/">
                    <Logo className="w-8 h-8 text-white fill-current" width="75" />
               </Link>
               <div className="relative md:hidden">
                    <Icon name="bars-3" className={iconSimpleClasse} />
                    <div className={`${menuOpened ? '' : 'hidden'} absolute right-0 z-20`}>
                         <MainMenu className="relative z-20 px-8 py-4 pb-2 mt-2 bg-indigo-800 rounded shadow-lg" />
                         <div onClick={() => {setMenuOpened(false);}} className="fixed inset-0 z-10 bg-black opacity-25"></div>
                    </div>
               </div>
          </div>
     );
};
