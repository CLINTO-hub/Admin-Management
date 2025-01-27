import React, { useEffect, useState } from "react";

const Employelist = () => {

     const [departmentData,setDepartmentData]=useState([])


    useEffect(() => {
                        const fetchDepartmentDetails = async () => {
                          try {
                            const token = localStorage.getItem('token')
                            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/employee`, {
                              method: 'GET', // Use POST for sending data
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization':`Bearer ${token}`
                              },
                              
                            });
                    
                            if (response) {
                              const result = await response.json();
                              // Handle the result, for example:
                              console.log(result.data,"response coming from backedn");
                              
                              setDepartmentData(result.data)
                             
                            } else {
                              console.error('Failed to fetch data:', response.statusText);
                            }
                          } catch (error) {
                            console.error('Error fetching department details:', error);
                          }
                        };
                    
                        fetchDepartmentDetails();
                      }, []);


  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Name
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Employee Number
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Age
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Department
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Report to
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Profile Description
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Profile Image
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
            </th>
          </tr>
        </thead>
        <tbody>
        name           String      
  image          String      
  description    String
  employeeNumber String
  age            Int
  departmentId   Int
  department     department  @relation(fields: [departmentId], references: [id])
  reportToId     Int
  reportTo    
        {departmentData.map((data,index)=>(
            <>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {data.name}
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {data.employeeNumber}
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {data.age}
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <a
                href="#"
                className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
              >
                {data.department}
              </a>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <a
                href="#"
                className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
              >
                {data.reportTo}
              </a>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
               {data}
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50 text-center">
              <img
                src={im}
                alt="Profile"
                className="w-10 h-10 rounded-full mx-auto mb-2"
              />
            </td>
          </tr>
          </>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employelist;
