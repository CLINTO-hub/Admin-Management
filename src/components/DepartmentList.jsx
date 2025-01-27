import React from 'react'





const DepartmentList = () => {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
    <table className="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Department Name
            </p>
          </th>
          
         
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Department Image
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              John Michael
            </p>
          </td>
         
          <td className="p-4 border-b border-blue-gray-50 text-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full mx-auto mb-2"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default DepartmentList