import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimoni-title">
      <SectionHeading
        eyebrow="Testimoni"
        title="Kesan setelah cerita yang akhirnya didengar."
        titleId="testimoni-title"
      />

      <motion.div
        className="testimonial-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((item, index) => (
          <motion.figure
            className="testimonial-card brutal-card"
            key={item.name}
            variants={fadeUp}
            whileHover={{ rotate: index === 1 ? -1.2 : 1.2, y: -8 }}
          >
            <blockquote>"{item.quote}"</blockquote>
            <figcaption>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
