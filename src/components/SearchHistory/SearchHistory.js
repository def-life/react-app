import "./searchHistory.css";
import List from "../List/List";


export default function searchHistory({term}) {
    let results = term.map((item, index) => {
        return {ref: index, title: item, content: null};
    })
    console.log(results);
    return (
        <div className="search_history">
           <List results={results}/>
        </div>
    );

}