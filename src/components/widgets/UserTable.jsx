import React from 'react'
import {useMemo, useState, useEffect} from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import axios from "axios";
import TablePaging from './TablePaging';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';
import HorizontalScroll from 'react-horizontal-scrolling'


  



function UserTable({columns, data, updateMyData, deleteMyData}) {
    const usersData = useMemo(() => [...data], [data]);
    const usersColumn = useMemo(() => (columns), [columns]);
    

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        selectedFlatRows,
        state: { pageIndex, pageSize },
      } = useTable({
        columns: usersColumn,
        data: usersData,
        initialState:{
            pageSize: 7
        },
        updateMyData,
        deleteMyData,
      },
      
      useSortBy,
      usePagination,
      useRowSelect,
      hooks => {
        hooks.visibleColumns.push(columns => [
            {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => (
                  <div className="flex justify-center">
                    <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                  </div>
                ),
                Cell: ({ row }) => (
                  <div>
                    <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                  </div>
                ),
              },
              ...columns,
        ])
      }

      );

    const isEven = (id) => id%2!==0 ;
    return (
        <>
    <div className="border-t border-l border-r mt-7 overflow-scroll md:overflow-hidden">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400" {...getTableProps()}>
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th className="p-3" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <div className=" inline-flex my-auto px-0.5">
                    {column.isSorted
                      ? column.isSortedDesc
                        ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                            </svg>
                        )
                        : (<div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                            </svg>
                        </div>)
                      : ''}
                  </div>
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()} className={"" + (isEven(i) ? "bg-gray-300 bg-opacity-30": "")}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()} className="">{cell.render('Cell')}</td>
                })}
                </tr>
            )
            })}
        </tbody>
        </table>
        {/* Table Paging */}
        </div>
         <div>
         <TablePaging gotoPage={gotoPage} pageCount={pageCount} pageOptions={pageOptions} pageIndex={pageIndex} previousPage={previousPage} nextPage={nextPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage} />
     </div>
     </>
    )
}

export default UserTable
