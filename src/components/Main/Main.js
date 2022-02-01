import "./main.css"; // importing the css
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Planets from "../Planets/Planets";
import Films from "../Films/Films";
import People from "../People/People";
import Home from "../Home/Home";
import Film from "../Film/Film";
import Planet from "../Planet/Planet";
import Person from "../Person/Person";
import Sub from "../Sub/Sub";
import { useEffect, useState } from "react";

export default function Main({keyword}) {
  console.log('main');
  // the best approach is make film , people person fetch here and pass props here
  // although fetch count jyada ho je ga
  // in that case what you can do is component wise fetch kr le use state variable to pass that array
  // first one is better although
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  let x = 5;
  let query = "?search=" + keyword;

  useEffect(async () => {
    let response = await fetch( "https://swapi.dev/api/planets" + query);
    let data = await response.json();
    setPlanets(data.results);

  }, [keyword]);

  useEffect(async () => {
    let response = await fetch("https://swapi.dev/api/people" + query);
    let data = await response.json();
    setPeople(data.results);

  }, [keyword]);

  useEffect(async () => {
    let response = await fetch( "https://swapi.dev/api/films" + query);
    let data = await response.json();
    setFilms(data.results);
  }, [keyword]);


  return (<>
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Home active={true}>
              <Sub />
              <Sub />
            </Home>
          }
        />
        <Route path="films" element={<Films list={films} />}>
          <Route index element={<p>Selected film will be displayed here</p>} />
          <Route path=":id" element={<Film />} />
        </Route>
        <Route path="planets" element={<Planets list={planets}/>}>
          <Route index element={<p>Planet will be rendered here</p>} />
          <Route path=":id" element={<Planet />} />
        </Route>
        <Route path="people/*" element={<People list={people}/>} />
        <Route path="*" element={<p>NO MATCH FOUND</p>} />
      </Routes>
    </div>
    <Outlet />
    </>
  );
}

// /films + / + 1234 + / + cat

// const [x, y] = useState("default value of your state here")
// useEffect(callback, )
// const[x, setx] useState()
// npm i react-router-dom

// dynamic routing
// react-router-dom hooks
// redirects

// useNavigator , useLocation, state etc
