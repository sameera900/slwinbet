import { useState } from 'react';
import './App.css';

function App() {
  const [coins, setCoins] = useState(100);

  const placeBet = (team) => {
    if (coins >= 50) {
      alert(`✅ ඔබ ${team} කණ්ඩායමට Bet එකක් දැම්මා!`);
      setCoins(coins - 50);
    } else {
      alert("⚠️ ඔබට ප්‍රමාණවත් කාසි නොමැත.");
    }
  };

  return (
    <div className="App">
      <h2>🏏 ශ්‍රී ලංකාව 🆚 ඉන්දියාව</h2>
      <p>💰 ඔබේ කාසි: {coins}</p>
      <button onClick={() => placeBet("ශ්‍රී ලංකාව / Sri Lanka")}>🇱🇰 Bet on Sri Lanka</button>
      <button onClick={() => placeBet("ඉන්දියාව / India")}>🇮🇳 Bet on India</button>
    </div>
  );
}

export default App;