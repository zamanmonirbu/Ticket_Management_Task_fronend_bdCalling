import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, fetchUsers, updateUserStatus, deleteUser } from '../../../redux/Actions/userActionsViaAdmin';

const ManageUserViaAdmin = () => {
  const dispatch = useDispatch();
  const { users=[], creatingUser } = useSelector((state) => state.userAdmin);

  console.log(users)


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('user'); // Default to user
  const [editingUser, setEditingUser] = useState(null); // Store the user being edited

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users when component mounts
  }, [dispatch]);

  // Handle create or update user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      const data={
        name, email, password, address, mobile, role
      }
      // If we are editing an existing user
      dispatch(updateUserStatus(editingUser._id, data));
    } else {
      // Create new user
      dispatch(createUser(name, email, password, address, mobile, role));
    }
    resetForm(); // Reset the form after submission
  };

  // // Handle status change (activate or deactivate)
  // const handleStatusChange = (userId, status) => {
  //   dispatch(updateUserStatus(userId, status === 'active' ? 'inactive' : 'active'));
  // };

  // Handle deleting a user
  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  // Handle editing a user
  const handleEdit = (user) => {
    setEditingUser(user); // Set user to be edited
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setAddress(user.address);
    setMobile(user.mobile);
    setRole(user.role);
  };

  // Reset the form
  const resetForm = () => {
    setEditingUser(null);
    setName('');
    setEmail('');
    setPassword('');
    setAddress('');
    setMobile('');
    setRole('user');
  };

  return (
    <div className="mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      
      {/* Form for creating or updating user */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="space-x-4">
          <button
            type="submit"
            disabled={creatingUser}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {creatingUser ? 'Creating...' : editingUser ? 'Update User' : 'Create User'}
          </button>
          {editingUser && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      { users?.length>0&& (
        <ul className="space-y-2 mt-4">
          {users.map((user) => (
            <li key={user?._id} className="p-4 border border-gray-200 rounded-md flex justify-between items-center">
              <div>
                <div className="font-semibold">{user?.name}</div>
                <div className="text-sm text-gray-500">{user?.role}</div>
              </div>
              <div className="space-x-2">
                {/* <button
                  onClick={() => handleStatusChange(user._id, user.status)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  {user.status === 'active' ? 'Deactivate' : 'Activate'}
                </button> */}
                <button
                  onClick={() => handleDelete(user?._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(user)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageUserViaAdmin;
