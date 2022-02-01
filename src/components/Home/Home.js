import "./home.css";
import { PropTypes } from "prop-types"; // from prop-types package import PropType

export default function Home({email="dog", time, active, children}) {

  return (
    <>
      <h2>
        <p>
          Home Component Rendered {new Date(time).toLocaleTimeString()}
        </p>
        <p>isActive: {active ? "yes" : "no"}</p>
      </h2>
      {children}
    </>
  );
}

function isEmail(props, propName, componentName) {
    if(!props[propName].includes("@")) return new Error("not a valid email")
}

Home.defaultProps = {
  time: Date.now(),
  name: "kavya",
  cat: {x: 1},
  x: 2,
  email: "@"
};

Home.propTypes = {
  name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool

  ]).isRequired,
  time: PropTypes.number,
  active: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  cat: PropTypes.exact({
      x: PropTypes.number,
      y: PropTypes.bool

  }).isRequired,
  x: PropTypes.number.isRequired,
  email: isEmail
  
};

// every component has these two properties defaultProps and propTypes
//
//
//

