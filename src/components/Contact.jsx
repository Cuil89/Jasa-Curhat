import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, Mail, Send } from 'lucide-react';
import { packages } from '../data';
import { fadeUp } from '../lib/motion';

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="section contact" id="kontak">
      <motion.div
        className="contact-panel"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="contact-copy">
          <span className="eyebrow">Mulai ngobrol</span>
          <h2>Cerita masuk, napas lega.</h2>
          <p>
            Untuk kondisi darurat, risiko menyakiti diri, atau krisis kesehatan mental, hubungi
            layanan darurat dan tenaga profesional terdekat.
          </p>
          <div className="contact-links">
            <a href="mailto:halo@jasacurhat.id">
              <Mail size={20} strokeWidth={2.7} />
              halo@jasacurhat.id
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={20} strokeWidth={2.7} />
              @jasacurhat
            </a>
          </div>
        </div>

        <form className="contact-form brutal-card" onSubmit={handleSubmit}>
          <label>
            Nama
            <input name="name" type="text" placeholder="Nama kamu" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="email@contoh.com" required />
          </label>
          <label>
            Pilihan paket
            <select name="package" defaultValue="Paket Deep Talk">
              {packages.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
          </label>
          <label>
            Cerita singkat
            <textarea name="message" rows="4" placeholder="Aku lagi butuh ditemani karena..." />
          </label>
          <button className="btn btn-primary" type="submit">
            Kirim request
            <Send size={19} strokeWidth={3} />
          </button>
          <AnimatePresence>
            {sent && (
              <motion.p
                className="form-note"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
              >
                Request masuk. Balasan hangat akan menyusul di jam aktif.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}
