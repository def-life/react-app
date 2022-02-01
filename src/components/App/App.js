import "./App.css";
import React, { createRef } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
// import SearchHistory from "../SearchHistory/SearchHistory";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import { useLocation } from "react-router-dom";

export default function App() {
  let company = "Caterpillar";
  const [keyword, setKeyword] = useState("");
  const {pathname} = useLocation(); // pathname change hora hai baar baar  
  const [page, setPage] = useState(pathname); // page ko mai change kr ra and new value daal ra based on pathname

  console.log("rendered in progress");
  useEffect(() => {
    console.log("earlier pathname is", page);
    let old = page.split("/")[1];
    let ne = pathname.split("/")[1];
    if(!(old === ne)) {
      // path has changed
      // set page
      setPage(ne);
      setKeyword("");  // so pathname cause useEffect then set Page cause one rendering and then setKeyword cause the other
    }  
  }, [pathname]);
  
  function saveKeyword(word) {
    setKeyword(word);
  }
  
  const sbInputRef = createRef(); // container for dom elements and useRef() is a container for anything


  return (
    <div className="App">
      <Header company={company} />
      <SearchBar sbInputRef={sbInputRef} keyword={keyword} saveKeyword={saveKeyword} />
      <div className="row">
      {/* <SearchHistory term={term} setTerm={setTerm}/> */}
      <Main keyword={keyword}/>
      </div>
    </div>
    );
}





// export default class App extends React.Component{
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//        <div className="App">
//          <h1>hllo Dog</h1>
//        </div>
//     );
//   }
// }

// 



