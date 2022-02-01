import "./searchResults.css";
import List from "../List/List";

export default function SearchResults({type, results}) {
  console.log(type);
  
  results = results.map((item) => {
    let obj = {};

    switch (type) {
      case "films":
        obj.title = item.title;
        obj.content = item.release_date;
        obj.ref = item.episode_id;
        break;
      case "people":
        // code here
        break;
      case "planets":
        // code here
        break;
      default: 
        // nothing
    }

    return obj;
  });

  console.log(results);

  return (
    <div className="results">
        <List results={results}/>
    </div>
  );
}
