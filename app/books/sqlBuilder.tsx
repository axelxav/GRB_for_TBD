"use client";

import { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Menggunakan next/router daripada next/navigation

const SQLbuilder = () => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState('');

  const router = useRouter();

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/query', { query });
      setQueryResult(response.data); // Mengupdate state queryResult dengan hasil query
      console.log(response.data); // Tampilkan hasil query
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearClick = () => {
    setQuery('');
    setQueryResult('');
  }

  return (
    <div className="space-y-4">
      <form className="py-7 px-20" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered mr-4 border-black border-2"
          placeholder="your query here"
        />
        <button className="px-7 btn bg-green-500 text-white" type="submit">
          Submit
        </button>
        <button className="px-7 ml-4 btn bg-red-500 text-white" type="button" onClick={handleClearClick}>
          Clear
        </button>
        
      </form>

      {/* Tampilkan hasil query */}
      {queryResult && (
        <div>
          <h3>Query Result:</h3>
          <pre>{JSON.stringify(queryResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SQLbuilder;
