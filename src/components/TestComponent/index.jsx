import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Label } from "./styled";

const TestComponent = ({ label }) => {
  const [isHover, setIsHover] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <>
      <Container
        onClick={() => setHasClicked(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        isHover={isHover}
      >
        <Label>{label}</Label>
      </Container>
      {hasClicked && <div>Button has been clicked</div>}
    </>
  );
};

TestComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TestComponent;
