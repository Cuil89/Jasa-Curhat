export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOut },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};
