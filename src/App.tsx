import { useState, useEffect } from 'react';
export default function App() {
  const it_tipps = [
    "Wenn du nicht weißt, was du tun sollst, mach einfach nichts.",
    "Wer einmal kackt, der kackt auch zweimal.", 
    "Nachts ist es kälter als draußen."];
    const [tipp, setTipp] = useState("");

    useEffect(() => {
      const savedTipp = localStorage.getItem("tailyTipTipp");
      if (savedTipp) {
        setTipp(savedTipp);
      } else {
        handleNewTipp(); //fallback
      }
    }, []);

    function handleNewTipp() {
      const randomIndex = Math.floor(Math.random() * it_tipps.length);
      const neuerTipp = it_tipps[randomIndex];
      setTipp(neuerTipp);
      localStorage.setItem("tailyTipTipp", neuerTipp);
    }
    


    return (
    <>
      <h1>TailyTip 🦆</h1>
      <p>{tipp}</p>
      <div style={{ fontSize: '2rem', marginTop: '1rem' }}>🦆</div>
      <button
        onClick={handleNewTipp}>Neuer Tipp 🧠</button>
        <div style={{ fontSize: '2rem', marginTop: '1rem' }}></div>
    </>
  );
}
