import React from 'react';

export default ({ color, size, ...props }) =>(
     <span className="flex mx-2">
          <span className={`animate-ping absolute inline-flex h-${size} w-${size} rounded-full bg-${color}-300 opacity-75`}></span>
     <span className={`relative inline-flex rounded-full h-${size} w-${size} bg-${color}-500`}></span>
     </span>
);
