import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from "react-toastify";

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");

    } else {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    
    }
  }, [user, navigate, auth.currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name, photoURL });
        setSuccess("Profile updated successfully!");
        setError("");

        toast('Profile Updated');

        navigate('/')
      }
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      setSuccess("");
      console.log(err)
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md my-5 rounded-lg">
          {/* <Helmet>
            <title>My Profile | Profile</title>
          </Helmet> */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Update Profile</h1>
          {success && <div className="text-green-600 mb-4">{success}</div>}
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <div className="mb-6">
            <img
              src={photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-center text-lg font-medium text-gray-700">
              {user.email}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full hover:bg-sky-500 bg-sky-600 text-xl font-bold text-white py-2 rounded transition duration-200"
            >
              Update Profile
            </button>
          </form>
        </div>
      );;
};

export default UpdateProfile;