import React from "react";

export const SearchResults = ({ name, index, onChange }) => {
  return (
    <div key={name + index} className="flex gap-x-2">
      <input
        type="radio"
        value={name}
        id={"radio-" + index}
        name="radio-group"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <label>{name}</label>
    </div>
  );
};
