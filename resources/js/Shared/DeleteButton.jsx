import React from 'react';

export default ({ onDelete, children }) =>(
     <button
          className="bg-red-700 text-sm text-white p-2 rounded focus:outline-none hover:bg-red-800 inline-flex items-center"
          tabIndex="-1"
          type="button"
          onClick={onDelete}
     >
          <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {children}
     </button>
);
