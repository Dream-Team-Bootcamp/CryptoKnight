import React, { useState } from "react";
import { motion } from "framer-motion";
import CryptoKnight from "../assets/images/cryptoknight.webp";

const Knight = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={CryptoKnight}
        alt="My Image"
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(" + (isClicked ? 0.5 : 1) + ")",
          zIndex: 100,
          width: "50%", // add this
          height: "auto", // add this
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.5 }}
        onClick={handleClick}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      {isClicked && (
        <motion.img
          src={CryptoKnight}
          alt="My Image"
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
          }}
          animate={{ scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
};

export default Knight;
