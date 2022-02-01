import "./header.css"
import Nav from "../Nav/Nav";

export default function Header(props) {
  
    return (
        <header className="header">
            <div className="company">
                <h2>{props.company}</h2>
            </div>
            <Nav />
        </header>
    );
    
}