import React, { useEffect, useState } from "react";

const DepartmentDetails = () => {
    const [departmentData,setDepartmentData]=useState([])

    

    useEffect(() => {
        const fetchDepartmentDetails = async () => {
          try {

            const token = localStorage.getItem('token')

            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/department`, {
              method: 'GET', // Use POST for sending data
              headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
              },
            });
    
            if (response.ok) {
              const result = await response.json();
              // Handle the result, for example:
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
    <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto h-full ">
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
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Department Description
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Department Head
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Profile image
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Department Team members
              </p>
            </th>

            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
            </th>
          </tr>
        </thead>
        <tbody>
        {departmentData.map((data,index)=>(
            <>
            <tr className="border-b ">
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {data.name}
              </p>
            </td>
            <td className="p-4  border-blue-gray-50 flex justify-center items-center object-cover">
              <img
                className="w-5 h-5 rounded-full"
                src={`${import.meta.env.VITE_BASE_URL}/${data.image}`}
              />
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {data.description}
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <a
                href="#"
                className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
              >
                  {data.head}
              </a>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <a
                href="#"
                className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
              >
                   {data.profileImage}
              </a>
            </td>
            <td className="p-4  border-blue-gray-50 flex flex-col  justify-center ">
              <img
                className="w-5 h-5 rounded-full"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw330Qls1rTn18iNg--oBEyV&ust=1738056302879000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDjhrfKlYsDFQAAAAAdAAAAABAE"
              />
              <p className="text-black text-sm ">Embloy name</p>
            </td>
            <td className="p-4 border-b border-blue-gray-50 text-center">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${data.image}`}
                alt="Profile"
                className="w-10 h-10 rounded-full mx-auto mb-2 object-cover"
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

export default DepartmentDetails;
