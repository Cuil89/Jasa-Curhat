import { useMemo } from 'react';
import { tickerWords } from '../data';

export function Marquee() {
  const words = useMemo(() => [...tickerWords, ...tickerWords], []);

  return (
    <div className="ticker" aria-label="Sorotan layanan">
      <div className="ticker-track">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </div>
  );
}
