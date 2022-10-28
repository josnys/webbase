import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenuUserItem from './MainMenuUserItem';

export default ({ className }) => {
     const { auth } = usePage().props;
     return (
          <div className={className}>
               <MainMenuUserItem text="Dashboard" link="user.home" icon="dashboard" />
          </div>
     );
};
