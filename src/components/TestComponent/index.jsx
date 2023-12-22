import PropTypes from "prop-types";
import { useState } from "react";
import Container from "./styled";

const TestComponent = ({ variant }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container variant={variant}>
      <p>TestComponent</p>
      <button
        onClick={() => {
          setIsClicked((curr) => !curr);
        }}
      >
        Bouton
      </button>
      {isClicked && <p>isClicked</p>}
    </Container>
  );
};

TestComponent.propTypes = {
  variant: PropTypes.oneOf(["bleu", "rouge"]),
};

TestComponent.defaultProps = {
  variant: "bleu",
};

export default TestComponent;
