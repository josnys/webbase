import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Icon from './Icon';

export default ({ icon, link, text }) => {
     const { url } = usePage();
     const isActive = url.startsWith('/'+link.split('.')[0]);

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-gray-700 fill-current': isActive,
          'text-gray-600 hover:text-gray-700 fill-current': !isActive
     });

     const textClasses = classNames({
          'text-gray-700 font-semibold': isActive,
          'text-gray-600 hover:text-gray-700 hover:font-semibold': !isActive
     });

     return (
          <div className="mb-2">
               <InertiaLink href={route(link)} className={`flex items-center group p-2 ${isActive?'bg-gray-400 rounded':''}`}>
                    <Icon name={icon} className={iconClasses} />
                    <div className={textClasses}>{text}</div>
               </InertiaLink>
          </div>
     );
};
