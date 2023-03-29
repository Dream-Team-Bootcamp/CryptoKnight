export const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  
  export const navItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -50 },
    hover: { scale: 1.1, color: "#50ae55" },
  };
  
  export const navTitleVariants = {
    hover: { scale: 1.1 },
  };
  
  export const hamburgerLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (index) => ({
      rotate: index === 1 ? 45 : -45,
      y: [10, -10][index],
    }),
  };
  