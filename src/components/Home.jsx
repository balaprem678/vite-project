import React from "react";
import { getUsers, getUserById } from './api';

function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Function to fetch a single user by ID
  const fetchUserById = async (id) => {
    try {
      const user = await getUserById(id);
      console.log('Fetched user:', user);
      // Do something with the user data
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2>Local Dummy API Data</h2>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded hover:bg-gray-50 cursor-pointer"
            onClick={() => fetchUserById(user.id)}
          >
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.job} - {user.city}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;
