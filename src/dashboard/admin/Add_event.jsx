import React, { useState } from 'react';

export default function Add_event() {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (!categories.includes(value) && value !== '') {
      setCategories([...categories, value]);
    }
  };

  const removeCategory = (cat) => {
    setCategories(categories.filter(c => c !== cat));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        className="flex justify-center ml-96 px-4 py-2 bg-teal-600 text-white rounded hover:bg-green-700 text-center items-center"
      >
        + Create an Event
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/50   bg-opacity-50">
          <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">🖋️ Add New Event</h2>

            <div className="mb-4">
              <label className="block font-medium">Event Name *</label>
              <input
                type="text"
                placeholder="What's your event name?"
                className="w-full border px-3 py-2 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Categories *</label>
              <select
                onChange={handleCategoryChange}
                className="w-full border px-3 py-2 rounded mt-1"
              >
                <option value="">Select Category</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Business">Business</option>
              </select>

              <div className="flex flex-wrap mt-2 gap-2">
                {categories.map((cat, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {cat}
                    <button onClick={() => removeCategory(cat)}>✖</button>
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-medium">Start Time *</label>
                <input
                  type="datetime-local"
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>
              <div>
                <label className="block font-medium">End Time *</label>
                <input
                  type="datetime-local"
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                ➕ Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
