/*import React, { Component } from 'react';

//const Notfoundpage = () => {

export default class Notfoundpage extends Component {

    render() {
        return (
            <div id='error'>
                <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
                <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        );
    }
}
//}*/


//export default Notfoundpage
//ErrorNotFound

//blue teal


export default function Notfoundpage() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-400">404</h1>
          <p className="text-3xl text-gray-600 mt-4">Oops! Page not found</p>
          <p className="mt-2 text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-400 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go back to Home
          </a>
        </div>
      </div>
    )
}



/**
 * import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The requested URL {deployedURL} was not found on this server.</p>
      <p>The requested URL {location.pathname} was not found on this server.</p>
    </div>
  );
}

export default NotFound;
 */

/**
 * <main className="grid min-h-[50vh] place-items-center px-6
        py-24 sm:py-32 lg:px-8  error-page"
    
        >
            <div className="text-center  py-8 sm:px-24 sm:py-8 bg-teal-900/40 
            rounded-lg backdrop-blur">
                <p className="sm:text-3xl font-semibold text-gray-600">404</p>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight
                text-gray-600 sm:text-6xl">Page not found</h1>
                <p className="mt-6 sm:text-lg leading-7 text-gray-200 ">Sorry, we couldn't find the page you're looking for.</p>
                <div className="mt-10 flex items-center justify-center
                gap-x-1 sm:gap-x-6">
                    <a href="#"
                    className="rounded-md bg-teal-600 px-3.5 py-2.5 text-xs sm:text-lg
                    font-semibold text-white shadow-sm hover:bg-teal-500
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                        <span>&larr;</span> Go back home
                    </a>
                    <a href="#" 
                    className="text-xs sm:text-lg font-semibold text-gray-100
                    rounded-md hover:bg-gray-100/20 hover:backdrop-blur
                    px-2 py-2.5 sm:px-3.5 ">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
 */