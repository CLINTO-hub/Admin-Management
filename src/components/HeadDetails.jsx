import { data } from "react-router-dom";

const HeadDetails = () => {
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/department/department`, {
          method: "POST", // Use POST for sending data
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            /* add your request body here */
          }),
        });

        if (response.ok) {
          const result = await response.json();
          // Handle the result, for example:
          setDepartmentData(result);
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
              <td className="p-4 border-b">{data.number}</td>
              <td className="p-4 border-b">{data.age}</td>
              <td className="p-4 border-b">
                <img
                  alt="Profile"
                  src="https://via.placeholder.com/50"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </td>
              <td className="p-4 border-b">{data}</td>
              <td className="p-4 border-b">{data}</td>
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
