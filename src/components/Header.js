import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

// const k = (props) => {
//   return (
//      <header>
//         <h1 style ={headerstyling}>{props.title}</h1>
//      </header>
//   )
// }


const Header = ({ title, onAdd, showAdd }) => {
  const location= useLocation() 
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname ==='/' &&  <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
};
Header.defaultProps = {
  title: "Task manager",
};

Header.propTypes = {
  title: PropTypes.string,
};
// const headerstyling = {
//     color:"yellow",
//     backgroundColor:"black"
// }
export default Header;
