import React, { useState, useEffect } from 'react';

export default function NetworkBoundary({...props}) {
     const [isOnline, setIsOnline] = useState(true);

     const onlineStatus = () => {
          console.log(navigator.onLine);
          setIsOnline(navigator.onLine);
     }

     useEffect(() => {
          window.addEventListener('online', onlineStatus);
          window.addEventListener('offline', onlineStatus);
          
          return () => {
               window.removeEventListener('online', onlineStatus);
               window.removeEventListener('offline', onlineStatus);
          }
     }, []);

     return (<>
          {(!isOnline) && <div className="w-1/2 m-auto h-full flex flex-col justify-center items-center">
               <h2 className="bg-red-100 p-4 text-red-600 rounded">Seems that you no longer have an internet connection.</h2>
               <p>{`Please, wait till your connection is back :)`}</p>
          </div>}

          {(isOnline) && props.children}
     </>);
}