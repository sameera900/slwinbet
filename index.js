document.getElementById('root').innerHTML = `
  <div style="text-align:center; padding: 20px; font-family: sans-serif;">
    <h1>Welcome to SL WinBet 🎲</h1>
    <p>Start your betting journey now!</p>
    <button onclick="placeBet()" style="padding:10px 20px; font-size:16px; background:#28a745; color:white; border:none; border-radius:5px;">
      Place Bet 💵
    </button>
    <p id="result" style="margin-top:20px;"></p>
  </div>
`;

function placeBet() {
  const result = Math.random() > 0.5 ? '🎉 You Won!' : '😢 You Lost!';
  document.getElementById('result').innerText = result;
}
