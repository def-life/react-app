import {useParams, useLocation } from "react-router-dom";


export default function Film(props) {
    let state = useLocation().state;
    function findFilm(id) {
        return state.find((item, index) => {
          return parseInt(id) === index;
        });
      }
    let film = findFilm(useParams().id);

    return (
        <div>
            {<p>{film.title}</p>}
        </div>
        
    )
}