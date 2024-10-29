import React from 'react';

const Search = ({ searchVal, handleSearch }) => {
  return (
    <div className="mb-3">
      <input  
      id="emailSearch" 
      class="form-control w-auto d-inline"
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchVal}  
        onChange={handleSearch}  
      />
    </div>
  );
}

export default Search;
