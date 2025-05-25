import { useEffect, useState } from "react";
import axiosInstance from "../../../config/axiosInsatance";
import Card from "../../components/card/Card";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      {users.length > 0 ? (
        <Card
          items={users}
          renderContent={(user) => (
            <>
              <h3 className="font-semibold text-sm">{user.username}</h3>
              <p className="text-xs text-gray-500">{user.email}</p>
            </>
          )}
        />
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
};

export default Users;

