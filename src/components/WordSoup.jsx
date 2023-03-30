import React from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Text = styled(motion.p)`
  font-size: 24px;
  color: #333;
  margin: 0 10px;
  cursor: pointer;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #04bcd4;
`;

const ImageComponent = () => {
  const wordAnimation = useAnimation();

  const handleMouseEnter = async () => {
    await wordAnimation.start({
      scale: 1.2,
      color: "#04bcd4",
    });
    await wordAnimation.start({
      scale: 1,
      color: "#333",
    });
  };

  return (
    <Container>
      <Text>
        This is some <Highlight onMouseEnter={handleMouseEnter}>highlighted text</Highlight> with an animation!
      </Text>
    </Container>
  );
};

export default ImageComponent;
