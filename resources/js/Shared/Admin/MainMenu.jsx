import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenuItem from './MainMenuItem';

export default ({ className }) => {
     const { auth } = usePage().props;
     return (
          <div className={className}>
               <MainMenuItem text="Dashboard" link="dashboard" icon="dashboard" />
               {auth.user.can.users && (<MainMenuItem text="Users" link="user.index" icon="user-group" />)}
          </div>
     );
};
