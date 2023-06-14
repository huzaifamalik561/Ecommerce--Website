"use client"
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the search term (e.g., perform a search operation)
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };

  return (

    <div className='border  '>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit" className='px-3'>Go</button>
    </form>
    </div>
  );
};

export default SearchBar;
