import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Label } from "./styled";

const TestComponent = ({ label }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isHover={isHover}
    >
      <Label>{label}</Label>
    </Container>
  );
};

TestComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TestComponent;
