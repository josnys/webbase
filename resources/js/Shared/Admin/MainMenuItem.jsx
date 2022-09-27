import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Icon from '@/Shared/Icon';

export default ({ icon, link, text }) => {
     const { url } = usePage();
     const isActive = url.startsWith('/admin/'+link.split('.')[0]);

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'stroke-slate-500 stroke-1 fill-slate-500': false,
          'stroke-slate-500 stroke-1 fill-slate-500 hover:stroke-slate-500': true
     });

     const textClasses = classNames({
          'text-xs text-slate-700 font-semibold': isActive,
          'text-xs text-slate-600 hover:text-slate-700 hover:font-semibold': !isActive
     });

     return (
          <div className="mb-2">
               <InertiaLink href={route(link)} className={`grid grid-cols-1 gap-1 place-content-center place-items-center group p-1 ${isActive?'bg-slate-200 rounded':''}`}>
                    <Icon name={icon} className={iconClasses} />
                    <div className={textClasses}>{text}</div>
               </InertiaLink>
          </div>
     );
};
