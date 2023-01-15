import React, { useContext, useState } from 'react'
import { NavUserContext } from '../App'

function Navbar(props) {
  const {isPage, setIsPage} = useContext(NavUserContext);
  return (
    <div className="max-w-fit">
       <div className="inline-flex rounded-md shadow-sm">
        <a href="/"  className={"md:px-4 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-l-lg hover:bg-gray-100 focus:z-10 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white " + (isPage === "/" ? "bg-gray-400 text-white": "bg-white" )}>
            General
        </a>
        <a href="/users"  className={"md:px-4 px-3 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white "  + (isPage === "/users" ? "bg-gray-400 text-white": "bg-white" )}>
            Users
        </a>
        <a href="/plan"  className={"md:px-4 px-3 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white " +  (isPage === "/plan" ? "bg-gray-400 text-white": "bg-white" )} >
            Plan
        </a>
        <a href="/billing"  className={"md:px-4 px-3 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white "  + (isPage === "/billing" ? "bg-gray-400 text-white": "bg-white" )}>
            Billing
        </a>
        <a href="/integrations"  className={"md:px-4 px-2 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white "  + (isPage === "/integrations" ? "bg-gray-400 text-white": "bg-white" )}>
            Integrations
        </a>
        </div>
    </div>
  )
}

export default Navbar
