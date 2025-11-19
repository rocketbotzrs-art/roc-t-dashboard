// === ROC-T Demo Wallet with Local Storage ===

// Load saved state
let walletConnected = localStorage.getItem("roc_walletConnected") === "true";
let rocBalance = parseInt(localStorage.getItem("roc_balance") || "0");

// Elements
const statusSpan = document.getElementById("walletStatus");
const balanceEl = document.getElementById("balance");
const connectBtn = document.getElementById("connectWallet");
const mintBtn = document.getElementById("mintBtn");
const mintInput = document.getElementById("mintAmount");

// Update UI
function updateUI() {
  statusSpan.textContent = walletConnected
    ? "Connected (demo) — 0xROCKET...3093"
    : "Disconnected";

  balanceEl.textContent = rocBalance;
}

// Save state
function saveState() {
  localStorage.setItem("roc_walletConnected", walletConnected);
  localStorage.setItem("roc_balance", rocBalance);
}

// Connect wallet
connectBtn.addEventListener("click", () => {
  walletConnected = true;
  saveState();
  updateUI();
});

// Mint button logic
mintBtn.addEventListener("click", () => {
  if (!walletConnected) return alert("Please connect wallet first!");

  const amount = parseInt(mintInput.value);
  if (isNaN(amount) || amount <= 0) return alert("Enter a valid amount");

  rocBalance += amount;
  saveState();
  updateUI();
});

// Load UI on page load
updateUI();
