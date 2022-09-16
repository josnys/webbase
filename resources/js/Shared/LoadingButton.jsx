import React from 'react';
import Indicator from './Indicator';

export default ({ loading, className, children, ...props }) => {
     return (
          <React.Fragment>
               <button
                    disabled={loading}
                    className={`focus:outline-none flex items-center ${className} ${!loading?'block':'hidden'}`}
                    {...props}
                    >
                    {children}
               </button>
               <div className={`focus:outline-none flex items-center ${className} ${loading?'block':'hidden'}`}>
                    <Indicator color="gray" size="3" />
                    Wait a minute..
               </div>
          </React.Fragment>
     );
};
