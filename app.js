// === ROC-T Demo Wallet with Local Storage ===

// Load saved state
let walletConnected = localStorage.getItem("roc_walletConnected") === "true";
let rocBalance = parseInt(localStorage.getItem("roc_balance") || "0", 10);
if (isNaN(rocBalance)) rocBalance = 0;

// Elements
const statusSpan = document.getElementById("walletStatus");
const balanceEl = document.getElementById("balance");
const connectBtn = document.getElementById("connectWallet");
const mintBtn = document.getElementById("mintBtn");
const mintInput = document.getElementById("mintAmount");
const burnBtn = document.getElementById("burnBtn");
const burnInput = document.getElementById("burnAmount");

// Update UI
function updateUI() {
  statusSpan.textContent = walletConnected
    ? "Connected (demo) — 0xROCKET...3093"
    : "Disconnected";

  // Optional: if you have .connected / .disconnected classes in CSS
  statusSpan.classList.toggle("connected", walletConnected);
  statusSpan.classList.toggle("disconnected", !walletConnected);

  // Change button label when connected / disconnected
  connectBtn.textContent = walletConnected ? "Disconnect Wallet" : "Connect Wallet";

  balanceEl.textContent = rocBalance;
}

// Save state
function saveState() {
  localStorage.setItem("roc_walletConnected", walletConnected ? "true" : "false");
  localStorage.setItem("roc_balance", String(rocBalance));
}

// Connect / Disconnect toggle
connectBtn.addEventListener("click", () => {
  walletConnected = !walletConnected; // flip true <-> false
  saveState();
  updateUI();
});

// Mint button logic
mintBtn.addEventListener("click", () => {
  if (!walletConnected) {
    alert("Please connect your wallet first.");
    return;
  }

  const amount = parseInt(mintInput.value, 10);
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount to mint");
    return;
  }

  rocBalance += amount;
  mintInput.value = "";

  saveState();
  updateUI();
});

// Burn button logic
burnBtn.addEventListener("click", () => {
  if (!walletConnected) {
    alert("Please connect your wallet first.");
    return;
  }

  const amount = parseInt(burnInput.value, 10);
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount to burn");
    return;
  }

  if (amount > rocBalance) {
    alert("You cannot burn more than your balance.");
    return;
  }

  rocBalance -= amount;
  burnInput.value = "";

  saveState();
  updateUI();
});

// Initial render
updateUI();
