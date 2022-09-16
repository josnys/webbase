import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const iconClasses = classNames('w-4 h-4 mr-2', {
     'text-white fill-current': false,
     'text-gray-500 hover:text-white fill-current': true
});

export function BackButton({link, linkParams, ...props}){
     return (<React.Fragment>
          <InertiaLink href={linkParams?route(link, linkParams):route(link)} className="bg-transparent border border-gray-400 text-sm text-gray-400 p-1 rounded focus:outline-none hover:bg-gray-400 hover:text-gray-100 inline-flex items-center">
               <Icon name="back" className={iconClasses} />
               Back
          </InertiaLink>
     </React.Fragment>);
}
