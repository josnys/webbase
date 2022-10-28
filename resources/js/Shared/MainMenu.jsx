import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenuItem from './MainMenuItem';

export default ({ className }) => {
     const { auth } = usePage().props;
     return (
          <div className={className}>
               <MainMenuItem text="Dashboard" link="user.home" icon="dashboard" />
          </div>
     );
};
