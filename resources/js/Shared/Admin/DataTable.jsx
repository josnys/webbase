import React from 'react';

const TableHeader = (header) => {
     return (<thead className="bg-slate-200">
          <tr>
               {header.captions.map((caption, i) => {
                    return <th key={i} className="px-2 py-1">{caption}</th>
               })}
          </tr>
     </thead>)
}

export default ({header, showNoData, ...props}) => {
     return (
          <table className="table-fixed col-span-12 text-sm">
               <TableHeader captions={header} />
               <tbody>
                    {...props.children}
                    {!showNoData && (<tr>
                         <td colSpan={header.length} className="p-3 bg-blue-100 text-blue-500 text-center">No data found.</td>
                    </tr>)}
               </tbody>
          </table>
     )
}
