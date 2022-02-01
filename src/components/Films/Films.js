import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Film from "../Film/Film";

export default function Films({list}) {
  // let base = "https://swapi.dev/api/";
  // let endpoint = "films";
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
    <div className="films">
      {list.length === 0 && <p>no films</p>}
      {list.map((item, index) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return { display: "block", color: isActive ? "orange" : "green" };
            }}
            to={"".concat("/films/", index)}
            key={index}
            state={list}
          >
            {item.title}
          </NavLink>
        );
      })}

      <Outlet />
    </div>
  );
}

// import Navigate <Navigate to="/learn" /> it is similar to replace state of history object
// NavLink is different Link
// it has activeclassNames,
