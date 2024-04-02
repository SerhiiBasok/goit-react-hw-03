import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form>
      <h3>Search contact:</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
