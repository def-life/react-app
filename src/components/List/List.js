import "./list.css";
import ListItem from "../ListItem/ListItem";


export default function List({results}) {
    console.log("List", results);
    return (
        <ul className="list">
            {
                results.map((obj) => {
                    return <ListItem key={obj.ref} reff={obj.ref} content={obj.content} title={obj.title}/>
                })
                
            } 
        </ul>
    );
}