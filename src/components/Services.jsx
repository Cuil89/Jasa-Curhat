import { motion } from 'framer-motion';
import { services } from '../data';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

export function Services() {
  return (
    <section className="section services" id="layanan">
      <SectionHeading
        eyebrow="Apa yang kamu dapat"
        title='Curhat yang tidak berhenti di kata "sabar".'
      />

      <motion.div
        className="service-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              className="service-card brutal-card"
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              style={{ '--accent': service.color }}
            >
              <div className="card-icon">
                <Icon size={28} strokeWidth={2.7} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
