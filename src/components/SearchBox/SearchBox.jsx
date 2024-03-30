import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form>
      <p>SEARCH CONTACT</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
