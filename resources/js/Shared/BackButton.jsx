import React from 'react';
import { Link } from '@inertiajs/react';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const iconClasses = classNames('w-4 h-4 mr-2', {
     'text-white fill-current': false,
     'text-gray-500 hover:text-white fill-current': true
});

export function BackButton({link, linkParams, ...props}){
     return (<React.Fragment>
          <Link href={linkParams?route(link, linkParams):route(link)} className="inline-flex items-center p-1 text-sm text-gray-400 bg-transparent border border-gray-400 rounded focus:outline-none hover:bg-gray-400 hover:text-gray-100">
               <Icon name="back" className={iconClasses} />
               Back
          </Link>
     </React.Fragment>);
}
