import React from 'react'
import * as yup from "yup"
import {Formik} from "formik";
import Dropzone from "react-dropzone";

const addUserSchema = yup.object().shape({
    name: yup.string().required("*Required"),
    email: yup.string().email("*Invalid email").required("*Required"),
    status: yup.string().required("*Required"),
    role: yup.string().required("*Required"),
    password: yup.string().required("*Required"),
    picture:yup.string().required("*Required"),
})


const initialValues = {
    name: "",
    email: "",
    status: "",
    role: "",
    password: "",
    picture: "",
}

const AddUserModal = (props) => {
    const handleFormSubmit = async (values, onSubmitProps) =>{
        props.addMyData(values);
        onSubmitProps.resetForm();
    }
  return (
    <div>
        <div className="md:fixed absolute z-50 w-screen md:w-full md:mx-auto backdrop-blur-sm md:p-4 md:overflow-x-hidden md:overflow-y-auto md:inset-0 flex md:justify-center">
          <div className="relative w-full border mr-11 md:mr-0 h-screen md:max-w-xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button onClick={props.handleAddUserButton} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add User</h3>
                      <Formik
                      onSubmit={handleFormSubmit}
                      initialValues={initialValues}
                      validationSchema={addUserSchema}
                      >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            resetForm
                        }) => (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" id="name" name="name" onBlur={handleBlur} onChange={handleChange} value={values.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name....." required />
                                    <div className="text-xs text-red-500 p-1">{errors.name && touched.name && errors.name} </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email...." required />
                                    <div className="text-xs text-red-500 p-1">{errors.email && touched.email && errors.email}</div>
                                </div>
                                <div>
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                    <input type="text" value={values.role} name="role" id="role" onChange={handleChange} onBlur={handleBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Role...." required />
                                    <div className="text-xs text-red-500 p-1">{errors.role && touched.role && errors.role}</div>
                                </div>
                                <div>
                                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input id="active" type="radio" value="Active" onChange={handleChange} onBlur={handleBlur} name="status" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label for="active" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input id="inactive" type="radio" value="Inactive" name="status" onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label for="inactive" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input id="invited" type="radio" value="Invited" name="status" onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label for="invited" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Invited</label>
                                            </div>
                                        </li>
                                        </ul>
                                        <div className="text-xs text-red-500 p-1">{errors.status && touched.status && errors.status}</div>
                                    </div>
                                    <div>
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo</label>
                                    
                                    <div className="flex items-center justify-center w-full">
                                        <Dropzone
                                            acceptedFiles=".jpg, .jpeg,.png"
                                            multiple={false}
                                            onDrop={(acceptedFile)=>{
                                                setFieldValue("picture",acceptedFile[0]);
                                            }}
                                            >
                                            {({getRootProps, getInputProps}) => (
                                                <div {...getRootProps()} className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <input {...getInputProps()} />
                                                    {!values.picture ? (
                                                       <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg aria-hidden="true" className="w-5 h-5 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                    ): (
                                                        <>
                                                            <div className="p-5">
                                                                {values.picture.name}
                                                            </div>
                                                        </>
                                                    )}

                                                </div>
                                            )}
                                            </Dropzone>
                                        </div> 
                                        <div className="text-xs text-red-500 p-1">{errors.picture && touched.picture && errors.picture}</div>
                                    </div>
                                    
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    <div className="text-xs text-red-500 p-1">{errors.password && touched.password && errors.password}</div>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                        )}

                      </Formik>
                  </div>
              </div>
          </div>
      </div> 

    </div>
  )
}

export default AddUserModal

