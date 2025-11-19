// ROC-T Dashboard Core Logic

document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.getElementById("connectWallet");
  const statusEl = document.getElementById("walletStatus");
  const balanceEl = document.getElementById("balance");
  const mintAmountEl = document.getElementById("mintAmount");
  const mintBtn = document.getElementById("mintBtn");

  let walletConnected = false;
  let balance = 0;

  connectBtn.addEventListener("click", () => {
    walletConnected = !walletConnected;

    if (walletConnected) {
      statusEl.textContent = "Connected";
      statusEl.style.color = "#4caf50";
      connectBtn.textContent = "Disconnect Wallet";
    } else {
      statusEl.textContent = "Disconnected";
      statusEl.style.color = "#e91e63";
      connectBtn.textContent = "Connect Wallet";
    }
  });

  mintBtn.addEventListener("click", () => {
    if (!walletConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    const amount = parseFloat(mintAmountEl.value);

    if (isNaN(amount) || amount <= 0) {
      alert("Enter a valid mint amount.");
      return;
    }

    balance += amount;
    balanceEl.textContent = balance.toFixed(2);

    alert(`Minted ${amount} ROC-T successfully!`);
  });
});
