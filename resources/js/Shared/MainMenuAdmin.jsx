import React from 'react';
import { usePage } from '@inertiajs/react';
import MainMenuAdminItem from './MainMenuAdminItem';

export default ({ className }) => {
     const { auth } = usePage().props;
     return (
          <div className={className}>
               <MainMenuAdminItem text="Dashboard" link="admin.dashboard" icon="dashboard" />
               <MainMenuAdminItem text="Users" link="admin.user.index" icon="users" />
          </div>
     );
};
