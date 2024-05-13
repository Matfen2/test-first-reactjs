import PropTypes from "prop-types";

function Describe(props) {
  return (
    <div className="describe">
      <p>My name is {props.pseudo}, all like my ancestors, i am the coder.</p>  
    </div>  
  )
}

Describe.propTypes = {
  pseudo: PropTypes.string.isRequired,
}

export default Describe