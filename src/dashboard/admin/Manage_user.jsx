import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaUser } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { FiDelete } from "react-icons/fi";

const Manage_user = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/api/users');
      return res.data.data;
    },
  });


  const handleMakeAdmin = user => {
     axiosSecure.patch(`/api/users/admin/${user._id}`)
     .then(res => {
     if(res.data.modifiedCount > 0){
      refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

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
        axiosSecure.delete(`/api/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            
            Swal.fire({
              title: "Deleted!", 
              text: "Your pet has been removed.",
              icon: "success"
            });

          }
          refetch();
        });
      }
    });
}

  return <div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-[#317371] text-white">
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
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
              </div>
              </td>
 
              <td>
                { user.role === 'admin' ? <div className="badge badge-soft badge-success">Admin</div> : 
                <button className='btn btn-ghost'
                onClick={() => handleMakeAdmin (user)}>
                  <FaUser className='text-green-500 text-3xl' />
                </button>}
                
              </td>
              <td>
                <button
                onClick={() => handleDelete(user)}>
                  <button>
                    <FiDelete className='text-3xl text-red-400' />  
                  </button>
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
