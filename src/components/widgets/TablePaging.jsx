import React from 'react'

export default function TablePaging(props) {
  return (
    <div>
        <div className="flex px-5 pt-2 justify-between border">
        <div className="">
            <button onClick={() => props.previousPage()} disabled={!props.canPreviousPage} type="button" className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            Previous
            </button>

            </div>
            <div className="flex">
            {props.pageOptions.map((pageNo, idx) => {
                return (
                    <div key={idx}>
                    <button type="button" onClick={() => props.gotoPage(pageNo)} key={pageNo} disabled={(props.pageIndex === pageNo)} className={"border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 " + (props.pageIndex === pageNo ? "text-white bg-gray-400 border-gray-600" : "bg-white text-gray-900 border-gray-200 hover:bg-gray-100")}>
                        <p className="">{pageNo+1}</p>
                    </button>
                    </div>
                );
            })}

            </div>
            <div className="">
            <button onClick={() => props.nextPage()} disabled={!props.canNextPage}  type="button" className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

            </button>

            </div>
        </div>
    </div>
  )
}
