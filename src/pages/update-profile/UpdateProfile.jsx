import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import loadingAnimation from '../../Assets/lotties/loading_ani_light.json'
import loadingAnimationdark from '../../Assets/lotties/loading_ani.json'

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user, navigate, auth.currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name, photoURL });
        setSuccess('Profile updated successfully!');
        setError('');

        toast('Profile Updated');

        navigate('/');
      }
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      setSuccess('');
      console.log(err);
    }
  };

  if (!user) {
    return <div className="flex min-h-screen items-center justify-center text-3xl ">
      <div className='w-96'>
        <Lottie animationData={loadingAnimation} ></Lottie>
        {/* <Lottie animationData={loadingAnimationdark} ></Lottie> */}
      </div>
    </div>
  }

  return (
    <div className="mx-auto my-5 mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      {/* <Helmet>
            <title>My Profile | Profile</title>
          </Helmet> */}
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">Update Profile</h1>
      {success && <div className="mb-4 text-green-600">{success}</div>}
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="mb-6">
        <img src={photoURL} alt="Profile" className="mx-auto mb-4 h-24 w-24 rounded-full" />
        <p className="text-center text-lg font-medium text-gray-700">{user.email}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-2 block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-gray-700">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-sky-600 py-2 text-xl font-bold text-white transition duration-200 hover:bg-sky-500"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
