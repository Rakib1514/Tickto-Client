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
    setCategories(categories.filter((c) => c !== cat));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        className="ml-96 flex items-center justify-center rounded bg-teal-600 px-4 py-2 text-center text-white hover:bg-green-700"
      >
        + Create an Event
      </button>

      {showModal && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-gray-300/50">
          <div className="relative w-full max-w-xl rounded bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">🖋️ Add New Event</h2>

            <div className="mb-4">
              <label className="block font-medium">Event Name *</label>
              <input
                type="text"
                placeholder="What's your event name?"
                className="mt-1 w-full rounded border px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Categories *</label>
              <select
                onChange={handleCategoryChange}
                className="mt-1 w-full rounded border px-3 py-2"
              >
                <option value="">Select Category</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Business">Business</option>
              </select>

              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((cat, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-sm"
                  >
                    {cat}
                    <button onClick={() => removeCategory(cat)}>✖</button>
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Start Time *</label>
                <input type="datetime-local" className="mt-1 w-full rounded border px-3 py-2" />
              </div>
              <div>
                <label className="block font-medium">End Time *</label>
                <input type="datetime-local" className="mt-1 w-full rounded border px-3 py-2" />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                ➕ Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
