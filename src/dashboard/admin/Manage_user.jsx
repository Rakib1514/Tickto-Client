import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { RefrigeratorIcon } from 'lucide-react';

const Manage_user = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/api/users');
      return res.data.data;
    },
  });

  const handleDelete = user => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/api/user/${user._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!", 
                text: "Your pet has been removed.",
                icon: "success"
              });

            }
          });
        }
      });
  }

  return <div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-base-200">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>User Photo</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( (user, index) => <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user?.displayName}</td>
              <td>{user.email}</td>
              <td>
              <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
              </div>
              </td>
              <td></td>
              <td>
                <button className='btn btn-ghost'
                onClick={() => handleDelete(user)}>
                  <FaDeleteLeft className='text-red-400 text-3xl' />
                </button>
              </td>
            </tr>)
          }
        </tbody>

      </table>
    </div>
  </div>;
};

export default Manage_user;
