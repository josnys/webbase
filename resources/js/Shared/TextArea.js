import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
     return (
          <div className={className}>
               {label && (
                    <label className="block font-medium text-sm text-gray-700" htmlFor={name}>
                         {label}:
                    </label>
               )}
               <textarea
                    id={name}
                    name={name}
                    {...props}
                    className={`shadow-none appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow ${errors.length ? 'border border-red-500' : ''}`}
               ></textarea>
               {errors && <div className="text-red-500 text-xs italic">{errors[0]}</div>}
          </div>
     );
};
