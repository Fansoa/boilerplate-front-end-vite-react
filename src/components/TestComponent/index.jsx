import PropTypes from "prop-types";
import Container from "./styled";

const TestComponent = ({ label }) => {
  return <Container>{label}</Container>;
};

TestComponent.propTypes = {
  label: PropTypes.string,
};

TestComponent.defaultProps = {
  label: "label",
};

export default TestComponent;
