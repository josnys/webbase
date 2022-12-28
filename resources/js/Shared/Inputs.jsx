import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import { filesize } from '../utils';

const iconSimpleClasse = classNames('w-6 h-6 mr-2', {
     'stroke-slate-500 stroke-1 fill-white': false,
     'stroke-slate-500 stroke-1 fill-white hover:stroke-slate-500': true
});

export function TextInputSimple ({label, className, name, placeText, errors = [], disable, readonly, must, focus, autocomplete, ...props}) {
     const _input = useRef();
     useEffect(() => {
          if(focus){
               _input.current.focus();
          }
     }, []);

     return (<div className={className}>
          {label && (
               <label className="block text-sm font-medium text-slate-600" htmlFor={name}>
                    {label} {(must == true) && (<span className="text-red-700">*</span>)}
               </label>
          )}
          <input
               ref={_input}
               id={name}
               name={name}
               placeholder={placeText}
               {...props}
               className={`form-input shadow-none appearance-none border border-slate-300 rounded w-full py-2 px-2 text-slate-600 leading-tight placeholder:italic placeholder:text-slate-400 focus:outline-none focus:shadow focus:border-none focus:ring-1 focus:ring-sky-500 ${errors.length ? 'border border-red-500' : ''}`}
               disabled={disable}
               readOnly={readonly}
               autoComplete={autocomplete?'on':'off'}
          />
          {errors && <div className="text-xs italic text-red-500">{errors[0]}</div>}
     </div>)
}

export function TextInputIcon ({label, icon, className, name, placeText, errors = [], disable, readonly, must, focus, autocomplete, ...props}) {
     const _input = useRef();
     useEffect(() => {
          if(focus){
               _input.current.focus();
          }
     }, []);

     return (<div className={className}>
          {label && (
               <label className="block text-sm font-medium text-slate-600" htmlFor={name}>
                    {label} {(must == true) && (<span className="text-red-700">*</span>)}
               </label>
          )}
          <label className={`relative`}>
               <span className={`absolute inset-y-0 left-0 flex items-center pl-2`}>
                    <Icon name={icon} className={iconSimpleClasse} />
               </span>
               <input
                    ref={_input}
                    id={name}
                    name={name}
                    placeholder={placeText}
                    {...props}
                    className={`form-input shadow-none appearance-none border border-slate-300 rounded w-full py-2 pl-9 pr-3 text-slate-600 leading-tight placeholder:italic placeholder:text-slate-400 focus:outline-none focus:shadow focus:border-none focus:ring-1 focus:ring-sky-500 ${errors.length ? 'border-red-500' : ''}`}
                    disabled={disable}
                    readOnly={readonly}
                    autoComplete={autocomplete?'on':'off'}
               />
               {errors && <div className="text-xs italic text-red-500">{errors[0]}</div>}
          </label>
     </div>);
}

export function TextAreaSimple({label, name, className, placeText, errors = [], disable, readonly, must, focus, ...props }){
     return (
          <div className={className}>
               {label && (
                    <label className="block text-sm font-medium text-slate-600" htmlFor={name}>
                         {label}:
                    </label>
               )}
               <textarea
                    id={name}
                    name={name}
                    {...props}
                    className={`shadow-none appearance-none block p-2 w-full text-sm text-slate-600 rounded border border-slate-300 placeholder:italic placeholder:text-slate-400 focus:outline-none focus:shadow focus:ring-sky-500 focus:border-sky-500 ${errors.length ? 'border border-red-500' : ''}`}
               ></textarea>
               {errors && <div className="text-xs italic text-red-500">{errors[0]}</div>}
          </div>
     );
}

export function FileInputShowImage({className, name, label, accept, errors = [], onChange}) {
     const fileInput = useRef();
     const [file, setFile] = useState(null);
     const [path, setPath] = useState(null);

     function browse() {
          fileInput.current.click();
     }

     function remove() {
          setFile(null);
          setPath(null);
          onChange(null, null);
          fileInput.current.value = null;
     }

     function handleFileChange(e) {
          let file = e.target.files[0];
          let path = URL.createObjectURL(e.target.files[0]);
          setFile(file);
          setPath(path);
          onChange(file, path);
     }

     return (<div className="flex items-center space-x-6">
          {path && (<div className="shrink-0">
               <img className="object-cover w-16 h-16 rounded-full" src={path} alt="Current image" />
               <div className="text-xs text-center text-slate-500">{filesize(file.size)}</div>
          </div>)}
          <label className="block">
               <span className="sr-only">Choose photo</span>
               <input
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:text-slate-600 hover:file:bg-slate-100"
                    id={name}
                    ref={fileInput}
                    accept={accept}
                    type="file"
                    onChange={handleFileChange}
               />
          </label>
          {errors.length > 0 && <div className="text-xs italic text-red-500">{errors[0]}</div>}
     </div>);
}

export function CheckInput ({label, className, errors = [], ...props}) {
     return (<div className={`flex items-center ${className}`}>
          <input
               id="checkbox-2"
               type="checkbox"
               className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-slate-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               {...props}
          />
          <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
          {errors && <div className="text-xs italic text-red-500">{errors[0]}</div>}
     </div>);
}

export function SelectInputSimple({label, name, className, must, children, errors = [], ...props}){
     return (<div className={className}>
          {label && (
               <label className="block text-sm font-medium text-slate-700" htmlFor={name}>
                    {label} {must && (<span className="text-red-700">*</span>)}
               </label>
          )}
          <select
               id={name}
               name={name}
               {...props}
               className={`form-input shadow-none appearance-none border border-slate-300 text-slate-600 text-sm rounded-lg w-full p-2 leading-tight placeholder:italic placeholder:text-slate-400 focus:outline-none focus:shadow focus:border-none focus:ring-1 ${errors.length ? 'border border-red-500' : ''}`}
          >
               {children}
          </select>
          {errors && <div className="form-error">{errors[0]}</div>}
     </div>)
}
