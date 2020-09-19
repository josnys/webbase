import React from 'react';
import MainMenuItem from './MainMenuItem';

export default ({ className }) => {
     return (
          <div className={className}>
               <MainMenuItem text="Dashboard" link="home" icon="dashboard" />
               <MainMenuItem text="Roles & Permissions" link="security.index" icon="key" />
               <MainMenuItem text="Users" link="user.index" icon="users" />
          </div>
     );
};
