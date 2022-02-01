import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./person.css";


export default function Person({list}) {
    let location = useLocation();
    let params = useParams();
    let id = parseInt(params.id)
    // console.log({location, params})
    // console.log("i am inside person component", {list});
    return <><h1>{list[id]?.name}</h1></>
}