import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { easeOut, fadeUp, stagger } from '../lib/motion';

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 720], [0, 90]);
  const titleY = useTransform(scrollY, [0, 540], [0, -54]);

  return (
    <section className="hero" id="home">
      <motion.img
        className="hero-art"
        src="/hero-jasa-curhat.png"
        alt="Ilustrasi layanan curhat online dengan smartphone, headset, dan chat bubbles"
        style={{ y: imageY }}
      />
      <div className="hero-noise" aria-hidden="true" />
      <motion.div
        className="hero-content"
        style={{ y: titleY }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="eyebrow" variants={fadeUp}>
          Online listening room
        </motion.span>
        <motion.h1 variants={fadeUp}>Jasa Curhat</motion.h1>
        <motion.p variants={fadeUp}>
          Tempat cerita yang responsif, hangat, dan tidak sok paling tahu. Cocok buat pikiran penuh,
          hati berisik, atau hari yang butuh ditemani.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="btn btn-primary" href="#paket">
            Lihat paket
            <ChevronRight size={20} strokeWidth={3} />
          </a>
          <a className="btn btn-ghost" href="#ritme">
            Cara kerjanya
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-ticket"
        initial={{ opacity: 0, rotate: 7, y: 22 }}
        animate={{ opacity: 1, rotate: -3, y: 0 }}
        transition={{ delay: 0.85, duration: 0.6, ease: easeOut }}
      >
        <span>Open daily</span>
        <strong>09.00 - 23.00</strong>
      </motion.div>

      <div className="floating-shape shape-one" aria-hidden="true" />
      <div className="floating-shape shape-two" aria-hidden="true" />
      <div className="floating-shape shape-three" aria-hidden="true" />
    </section>
  );
}
