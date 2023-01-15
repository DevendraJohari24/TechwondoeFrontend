import { useContext, useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import { NavUserContext } from "../../App";

export const Columns = [
    {
        Header: "Name",
        accessor: "name",
        Cell: (props) => {
        const [newName, setNewName] = useState(props.row.original.name);
        const {editToggle, setEditToggle} = useContext(NavUserContext);
        const onChange = (e) => {
            setNewName(e.target.value);
        }
        const onBlur = (e) => {
            props.updateMyData(props.row.index,props.column.id, newName)
        }

        useEffect(() => {
            setNewName(props.row.original.name);
        }, [props.row.original.name]);

        if(editToggle === props.row.index){
            return (
                <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={`https://techwondoe-backend-buhqeryaq-devendrajohari24.vercel.app/assets/${props.row.original.picturePath}`} alt="" />
                    <div className="pl-3 w-full">
                        <div className="text-base font-semibold"><input type="text" value={newName} onChange={onChange} onBlur={onBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></div>
                        <div className="font-normal text-gray-500">{props.row.original.email}</div>
                    </div>  
                </div>
            )
        }else{
            return (
                <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white overflow-hidden">
                    <img className="w-10 h-10 rounded-full" src={`https://techwondoe-backend-buhqeryaq-devendrajohari24.vercel.app/assets/${props.row.original.picturePath}`} alt="" />
                    <div className="pl-3 w-full">
                        <div className="text-base font-semibold">{newName}</div>
                        <div className="font-normal text-gray-500">{props.row.original.email}</div>
                    </div>  
                </div>
                );
        }
        }
    },

    {
        Header: "Status",
        accessor: "status",
        Cell: ({value}) => (
            <div className="overflow-hidden">
                {
                    value==="Active" && 
                    (
                    <div className="flex items-center ">
                        <div className="flex bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"><div className="h-2.5 w-2.5 my-auto rounded-full bg-green-400 mr-2"></div><div>Active</div></div>
                    </div>   
                    )
                }
                {
                    value==="Inactive" && 
                    (
                    <div className="flex items-center ">
                        <div className="flex bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"><div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2 my-auto"></div><div>Inactive</div></div>
                    </div>   
                    )
                }
                {
                    value==="Invited" && 
                    (
                    <div className="flex items-center ">
                        <div className="flex bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"><div className="h-2.5 w-2.5 rounded-full bg-gray-400 mr-2 my-auto"></div><div>Invited</div></div>
                    </div>   
                    )
                }
                </div>
        )
    },
    {
        Header: "Role",
        accessor: "role",
        Cell: (props) => {
            const [newRole, setNewRole] = useState(props.row.original.role);
            const {editToggle, setEditToggle} = useContext(NavUserContext);
            const onChange = (e) => {
                setNewRole(e.target.value);
            }
            const onBlur = (e) => {
                props.updateMyData(props.row.index,props.column.id, newRole)
            }

            useEffect(() => {
                setNewRole(props.row.original.role);
            }, [props.row.original.role]);

            if(editToggle === props.row.index){
                return (
                    <input type="text" value={newRole} onChange={onChange} onBlur={onBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-fit dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />                        
                );
            }else{
                return (
                    <div className="overflow-hidden">
                    {newRole}
                    </div>
                );
            }

        }
    },
    {
        Header: "Last Login",
        accessor: "lastActiveAt",
        Cell: ({value}) =>(
            
            <div className="overflow-hidden">
                <p className="font-bold">{new Date(value).toLocaleDateString('en-us', {year: "numeric",month: "short", day: "numeric" })}</p>
                <p>{new Date(value).toLocaleTimeString( "en-us" ,{hour: "2-digit", minute: "numeric"})}</p>
          </div>
        )
    },
    {
        Header: "",
        accessor: "options",
        filterable: false,
        Cell: (props) => {
            const {editToggle, setEditToggle} = useContext(NavUserContext);
            const [editButton, setEditButton] = useState(false);
            const [deleteButton, setDeleteButton] = useState(false);
            const handleEditButton = (e) => {
                setEditButton(true);
                setEditToggle(props.row.index);
            }
 
            const handleDeleteButton = (e) => {
                setDeleteButton(value =>!value);    
            }

            const handleSaveButton = (e) => {
                setEditButton(false);
                setEditToggle(null);
            }

            const handleDeleteUserData = (e) => {
                props.deleteMyData(props.row.index,props.column.id, props.row.original._id);
                setDeleteButton(value => !value)
            }

            return (
                <>
                {deleteButton ? (<>
                    <DeleteModal handleDeleteUserData={handleDeleteUserData}  handleDeleteButton={handleDeleteButton} />
                </>
                ) : (
                    <>
                        {editButton ? (
                            <>
                            {/* save */}
                            <button type="button" onClick={handleSaveButton}  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                            <svg className="w-6 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                            </svg>
                            </button>
                            </>

                        ): (
                            <>
                            <button type="button" onClick={handleEditButton}  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                                <svg className="w-6 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            {/* Delete Button */}
                            </button>
                            <button type="button" onClick={handleDeleteButton} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>   
                            </>
                        )} 
                    </>
                )}
                
                </>
            )
        }
         
    }

    
]
