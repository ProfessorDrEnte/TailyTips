import { useState, useEffect } from 'react';
export default function App() {
  const it_tipps = [
    "Wenn du nicht weißt, was du tun sollst, mach einfach nichts.",
    "Wer einmal kackt, der kackt auch zweimal.", 
    "Nachts ist es kälter als draußen."];
    const [tipp, setTipp] = useState("");

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * it_tipps.length);
      setTipp(it_tipps[randomIndex]);
    }, []);
  
    return (
    <>
      <h1>TailyTip 🦆</h1>
      <p>{tipp}</p>
      <div style={{ fontSize: '2rem', marginTop: '1rem' }}>🦆</div>
    </>
  );
}
