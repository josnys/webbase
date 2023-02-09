import React from 'react';
import { Link } from '@inertiajs/react';
import classNames from 'classnames';
import Icon from '@/Shared/Icon';
import Indicator from './Indicator';

const iconSimpleClasse = classNames('w-4 h-4 mr-2', {
     'text-white fill-current': false,
     'text-gray-500 hover:text-white fill-current': true
});

export function ButtonLinkSimple ({caption, icon, link, linkParams, ...props}) {
     return (<Link href={linkParams?route(link, linkParams):route(link)} className="inline-flex items-center px-1 py-1 mr-2 text-sm text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
               {icon && (<Icon name={icon} className={iconSimpleClasse} />)}
               {caption}
     </Link>);
}

export function ButtonSubmitSimple ({caption, icon, loading, ...props}) {
     return (<React.Fragment>
          <button
               disabled={loading}
               className={`focus:outline-none flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4 ${!loading?'block':'hidden'}`}
               {...props}
               >
               {caption}
          </button>
          <div className={`focus:outline-none flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4 ${loading?'block':'hidden'}`}>
               <Indicator color="gray" size="3" />
               Wait a minute..
          </div>
     </React.Fragment>)
}
