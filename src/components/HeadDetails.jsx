import { useEffect,useState } from "react";
import { data } from "react-router-dom";

const HeadDetails = () => {
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/department-head`, {
          method: "GET", // Use POST for sending data
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
          },
        });

        if (response.ok) {
          const result = await response.json();
          // Handle the result, for example:
          setDepartmentData(result.data);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching department details:", error);
      }
    };

    fetchDepartmentDetails();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Employee Number</th>
              <th className="p-4 border-b">Age</th>
              <th className="p-4 border-b">Profile Image</th>
              <th className="p-4 border-b">Department</th>
              <th className="p-4 border-b">Profile Description</th>
            </tr>
          </thead>
          <tbody>

          
{departmentData.map((data,index)=>(
          <>
            <tr>
              <td className="p-4 border-b">{data.name}</td>
              <td className="p-4 border-b">{data.employeeNumber}</td>
              <td className="p-4 border-b">{data.age}</td>
              <td className="p-4 border-b">
                <img
                  alt="Profile"
                  src={`${import.meta.env.VITE_BASE_URL}/${data.image}`}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </td>
              <td className="p-4 border-b">{data.departmentId}</td>
              <td className="p-4 border-b">{data.description}</td>
            </tr>
            </>
))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HeadDetails;
