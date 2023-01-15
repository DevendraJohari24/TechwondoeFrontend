import React, { useState } from 'react'
import AddUserModal from './data/AddUserModal';

export default function CardHeader(props) {
  const [toggleAddUser, setToggleAddUser] = useState(false);

  const handleAddUserButton = () => {
    setToggleAddUser(value => !value);
  }
  const handleDownloadButton = () =>{
    props.downloadMyData();
  }
  return (
    toggleAddUser ? (
      <div className="">
        <AddUserModal handleAddUserButton={handleAddUserButton} addMyData={props.addMyData}   />
      </div>
    ) : (
      <div>
        <div className="flex flex-col md:flex-row md:justify-between w-full space-y-3">
        <div className='flex flex-col space-y-2'>
          <div className='flex space-x-2 md:space-x-4'>
            <h3 className='text-xl font-medium'>Users</h3>
            <div className='flex h-fit my-auto mt-2 bg-green-100 rounded-lg'>
              <p className='text-xs text-green-700 px-1.5 py-0.5' >{props.usersCount} users</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm font-sans font-normal text-left">Manage your team members and their account permissions here.</p>
        </div>
        <div className='flex space-x-5 md:justify-center my-auto'>
          <div>
            <button onClick={handleDownloadButton} className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd"></path></svg>
              Download CSV</button>
          </div>
          <div>
            <button onClick={handleAddUserButton} className="inline-flex items-center px-5 py-1.5 text-sm font-medium text-white bg-blue-500 border border-gray-200 rounded-md hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
             <svg className="w-4 h-4 mr-2 fill-current" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add User</button>
          </div>
          
        </div>
      </div>
      
    </div>
    )
  )
}
