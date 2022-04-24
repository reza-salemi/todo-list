import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ color, text, onClick, type }) => {
  return (
    <button
      className={styles.btn}
      type={type || "button"}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
