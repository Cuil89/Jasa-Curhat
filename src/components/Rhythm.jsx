import { motion } from 'framer-motion';
import { rhythm } from '../data';
import { easeOut } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

export function Rhythm() {
  return (
    <section className="section rhythm" id="ritme">
      <SectionHeading
        eyebrow="Ritme sesi"
        title="Flow-nya cepat dipahami, tetap terasa personal."
      />

      <div className="rhythm-list">
        {rhythm.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="rhythm-item"
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <span className="step">{item.step}</span>
              <div className="rhythm-icon">
                <Icon size={26} strokeWidth={2.8} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
