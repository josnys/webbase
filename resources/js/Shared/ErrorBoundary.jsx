import React from 'react';

export default class ErrorBoundary extends React.Component {
     constructor(props) {
          super(props);
          this.state = { hasError: false}
     }
     static getDerivedStateFromError(error) {
          // Update state so the next render will show the fallback UI.
          return { hasError: true };
     }

     componentDidCatch(error, errorInfo) {
          // You can also log the error to an error reporting service
          // console.log(error, errorInfo);
     }

     render() {
          if (this.state.hasError) {
               // You can render any custom fallback UI
               return <div className="w-1/2 m-auto h-full flex flex-col justify-center items-center">
                    <h2 className="bg-red-100 p-4 text-red-600 rounded">Something went wrong. Please contact developper.</h2>
               </div>;
          }
          return this.props.children;
     }
}
