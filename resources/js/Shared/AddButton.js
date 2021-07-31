import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const iconClasses = classNames('w-4 h-4 mr-2', {
     'text-white fill-current': false,
     'text-gray-500 hover:text-white fill-current': true
});

export function AddButton({caption, link, linkParams, ...props}){
     return (<React.Fragment>
          <InertiaLink href={linkParams?route(link, linkParams):route(link)} className="bg-gray-300 hover:bg-gray-400 mr-2 text-gray-800 text-sm py-1 px-1 rounded inline-flex items-center">
               <Icon name="plus" className={iconClasses} />
               {caption}
          </InertiaLink>
     </React.Fragment>);
}
