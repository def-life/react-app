import "./listItem.css";


export default function ListItem({title, content, reff}) {
    return (
       <div className="item">
           <h2 data-ref={reff}>{title}</h2>
           {content && <p>{content}</p>}
       </div>
    );
};
