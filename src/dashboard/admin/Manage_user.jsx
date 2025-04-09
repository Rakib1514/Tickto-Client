import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Manage_user = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/api/users');
      return res.data;
    },
  });
  return <div>{/* total users: {users.length} */}</div>;
};

export default Manage_user;
