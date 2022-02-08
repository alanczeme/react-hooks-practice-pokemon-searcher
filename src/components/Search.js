import React, { useState } from "react";

function Search({ setSearchText }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => setSearchText(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
