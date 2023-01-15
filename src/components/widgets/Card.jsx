import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="w-full p-4 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            {props.children}
        </div>
    </div>
  )
}

export default Card