import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const IconSuccess = () => (
     <svg className="ml-4 mr-2 flex-shrink-0 w-6 h-6 text-green-50 fill-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
     </svg>
);

const IconDanger = () => (
     <svg className="ml-4 mr-2 flex-shrink-0 w-6 h-6 text-red-50 fill-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
     </svg>
);

const IconWarning = () => (
     <svg className="ml-4 mr-2 flex-shrink-0 w-6 h-6 text-yellow-50 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
     </svg>

);

const ButtonClose = ({ color, onClick }) => {
     const className = classNames('block  w-2 h-2 fill-current', {
          'text-red-700 group-hover:text-red-800': color === 'red',
          'text-green-700 group-hover:text-green-800': color === 'green',
          'text-yellow-700 group-hover:text-yellow-800': color === 'yellow'
     });
     return (
          <button
               onClick={onClick}
               type="button"
               className="focus:outline-none group mr-2 p-2"
               >
               <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="235.908"
                    height="235.908"
                    viewBox="278.046 126.846 235.908 235.908"
                    >
                    <path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z" />
               </svg>
          </button>
     );
};

export default () => {
     const [visible, setVisible] = useState(true);
     const { flash, errors } = usePage().props;
     const numOfErrors = Object.keys(errors).length;

     useEffect(() => {
          setVisible(true);
     }, [flash, errors]);

     return (
          <div>
               {flash.success && visible && (
                    <div className="flex items-center justify-between bg-green-500 rounded max-w-3xl mx-auto">
                         <div className="flex items-center">
                              <IconSuccess />
                              <div className="py-4 text-white text-sm font-medium">
                                   {flash.success}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="green" />
                    </div>
               )}
               {(flash.error || numOfErrors > 0) && visible && (
                    <div className="flex items-center justify-between bg-red-500 rounded max-w-3xl mx-auto">
                         <div className="flex items-center">
                              <IconDanger />
                              <div className="py-4 text-white text-sm font-medium">
                                   {flash.error && flash.error}
                                   {numOfErrors === 1 && 'There is one form error'}
                                   {numOfErrors > 1 && `There are ${numOfErrors} form errors.`}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="red" />
                    </div>
               )}
               {flash.warning && visible && (
                    <div className="flex items-center justify-between bg-yellow-500 rounded max-w-3xl mx-auto">
                         <div className="flex items-center">
                              <IconWarning />
                              <div className="py-4 text-yellow-700 text-sm font-medium">
                                   {flash.warning && flash.warning}
                                   {numOfErrors === 1 && 'There is one form error'}
                                   {numOfErrors > 1 && `There are ${numOfErrors} form errors.`}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="yellow" />
                    </div>
               )}
          </div>
     );
};
