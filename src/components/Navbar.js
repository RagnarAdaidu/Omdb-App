import React, { useState } from "react";

export default function Navbar({query, setQuery}) {
  // const [query, setQuery] = useState("");

  return (
      <div className="label-and-input grid-align-self" id='search-for-movie'>
        <label htmlFor="search" className="h3 heading-tertiary">Explore</label>
        <input
          className="search"
          type="text"
          id="search"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

  );
}
