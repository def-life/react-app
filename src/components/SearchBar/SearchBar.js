import { createRef, useEffect } from "react";
import "./searchBar.css";
// import { useState } from "react";


export default function SearchBar({keyword, saveKeyword, sbInputRef}) {

  // let inputRef = createRef(); // container for dom/react element

  
  function handleClick(ev) {
    console.log('clicked on button');
    saveKeyword(sbInputRef.current.value);
  }

  useEffect(() => {
    sbInputRef.current.value = keyword;
  }, [keyword, sbInputRef]);
  

  return (
    <div className="container"> 
      <input placeholder="search" ref={sbInputRef} defaultValue={keyword} className="searchbar" type="search"></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
