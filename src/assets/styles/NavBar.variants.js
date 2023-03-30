export const menuVariants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  closed: { opacity: 0, x: "100%", transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const navItemVariants = {
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99], delay: i * 0.1 },
  }),
  closed: (i) => ({
    opacity: 0,
    y: -50,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99], delay: i * 0.1 },
  }),
  hover: {
    scale: 1.1,
    color: "#50ae55",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const navTitleVariants = {
  hover: {
    scale: 1.2,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

export const hamburgerLineVariants = {
  closed: { rotate: 0, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  open: (index) => ({
    rotate: index === 1 ? 45 : -45,
    y: [15, -15][index],
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  }),
};

