import { Link, NavLink, Route, Routes } from "react-router-dom";
import Person from "../Person/Person";
import { useState, useEffect } from "react";
import "./people.css";

export default function People({list}) {

  // let base = "https://swapi.dev/api/";
  // let endpoint = "people";
  // let url = "".concat(base + endpoint);

  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error(response.statusText);
  //     })
  //     .then((data) => {
  //       setList(data.results);
  //       console.log(data.results);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //     });
  // }, []); // when my component is initially rendered

  return (
    <>
      {list.length === 0 && <p>No People</p>}
      {list.map((p, index) => {
          return <NavLink style={({isActive}) => {
              return {display: "block"}
          }} key={index} state={new Date()} to={"/people/".concat(index)}>{p.name}</NavLink>
      })}
      <Routes>
        <Route  path=":id" element={<Person list={list} />} />
      </Routes>
    </>
  );
}
