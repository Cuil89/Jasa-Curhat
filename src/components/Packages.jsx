import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { packages } from '../data';
import { fadeUp, stagger } from '../lib/motion';
import { SectionHeading } from './SectionHeading';

export function Packages() {
  return (
    <section className="section packages" id="paket">
      <SectionHeading eyebrow="Paket sesi" title="Pilih level ditemani yang paling pas." />

      <motion.div
        className="pricing-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {packages.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              className={`price-card brutal-card ${item.featured ? 'featured' : ''}`}
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -12 }}
              style={{ '--accent': item.color }}
            >
              <div className="price-top">
                <div className="card-icon">
                  <Icon size={28} strokeWidth={2.7} />
                </div>
                <span>{item.badge}</span>
              </div>
              <h3>{item.name}</h3>
              <div className="price-line">
                <strong>{item.price}</strong>
                <span>{item.time}</span>
              </div>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="btn btn-card" href="#kontak">
                Ambil paket
                <ArrowRight size={19} strokeWidth={3} />
              </a>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
