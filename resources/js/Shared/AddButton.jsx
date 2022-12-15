import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const iconClasses = classNames('w-4 h-4 mr-2', {
     'text-white fill-current': false,
     'text-gray-500 hover:text-white fill-current': true
});

export function AddButton({caption, link, linkParams, ...props}){
     return (<React.Fragment>
          <Link href={linkParams?route(link, linkParams):route(link)} className="inline-flex items-center px-1 py-1 mr-2 text-sm text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
               <Icon name="plus" className={iconClasses} />
               {caption}
          </Link>
     </React.Fragment>);
}
