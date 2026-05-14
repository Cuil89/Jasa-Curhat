import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

export function SectionHeading({ eyebrow, title, titleId }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={titleId}>{title}</h2>
    </motion.div>
  );
}
