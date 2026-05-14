import { motion } from 'framer-motion';
import { stats } from '../data';
import { fadeUp, stagger } from '../lib/motion';

export function StatStrip() {
  return (
    <motion.section
      className="stats-strip"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {stats.map((item) => (
        <motion.div className="stat-card" key={item.label} variants={fadeUp}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </motion.div>
      ))}
      <motion.p variants={fadeUp}>
        Cerita yang tadinya kusut dibantu jadi lebih rapi: didengar dulu, divalidasi secukupnya,
        lalu ditutup dengan langkah kecil yang masih masuk akal.
      </motion.p>
    </motion.section>
  );
}
