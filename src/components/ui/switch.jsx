import React from "react";

export const Switch = ({ checked, onChange, className = "" }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-11 h-6 bg-gray-300 rounded-full shadow-inner transition ${
          checked ? "bg-blue-600" : ""
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
            checked ? "translate-x-5" : "translate-x-1"
          }`}
        ></div>
      </div>
    </label>
  );
};
