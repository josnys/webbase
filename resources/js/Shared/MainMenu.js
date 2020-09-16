import React from 'react';
import MainMenuItem from './MainMenuItem';

export default ({ className }) => {
     return (
          <div className={className}>
               <MainMenuItem text="Dashboard" link="home" icon="dashboard" />
          </div>
     );
};
