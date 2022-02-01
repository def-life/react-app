import "./content.css"

export default function Content({title, content}) {
    return (
        <div className="col">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}