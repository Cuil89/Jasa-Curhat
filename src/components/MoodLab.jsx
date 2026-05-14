import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { moods } from '../data';
import { fadeUp } from '../lib/motion';

export function MoodLab() {
  const [activeKey, setActiveKey] = useState(moods[0].key);
  const activeMood = moods.find((mood) => mood.key === activeKey) ?? moods[0];

  return (
    <section className="section mood-lab" aria-labelledby="mood-title">
      <motion.div
        className="mood-panel"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        style={{ '--accent': activeMood.accent }}
      >
        <div className="mood-copy">
          <span className="eyebrow">Mood board</span>
          <h2 id="mood-title">Beda rasa, beda cara ditemani.</h2>
          <p>
            Pilih energi yang paling dekat dengan hari kamu. Dari situ, sesi bisa dimulai dengan
            bahasa yang lebih pas.
          </p>
          <div className="mood-tabs" role="tablist" aria-label="Pilihan suasana hati">
            {moods.map((mood) => (
              <button
                className={mood.key === activeKey ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={mood.key === activeKey}
                key={mood.key}
                onClick={() => setActiveKey(mood.key)}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="mood-result brutal-card"
            key={activeMood.key}
            initial={{ opacity: 0, x: 26, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            exit={{ opacity: 0, x: -26, rotate: -2 }}
            transition={{ duration: 0.32 }}
          >
            <span>{activeMood.title}</span>
            <p>{activeMood.response}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
