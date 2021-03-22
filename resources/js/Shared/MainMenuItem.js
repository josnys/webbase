import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Icon from './Icon';

export default ({ icon, link, text }) => {
     const isActive = route().current(link + '*');

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-gray-200 fill-current': isActive,
          'text-gray-400 hover:text-white fill-current': !isActive
     });

     const textClasses = classNames({
          'text-gray-200': isActive,
          'text-gray-400 hover:text-white': !isActive
     });

     return (
          <div className="mb-2">
               <InertiaLink href={route(link)} className="flex items-center group py-2">
                    <Icon name={icon} className={iconClasses} />
                    <div className={textClasses}>{text}</div>
               </InertiaLink>
          </div>
     );
};
