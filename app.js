// Simple demo logic for the ROC-T Wallet Dashboard.
// This does NOT connect to real Flare yet – it just shows
// that the UI + JS are wired up correctly.

let walletConnected = false;
let rocBalance = 0;

// Grab elements safely
const statusSpan   = document.getElementById("walletStatus");
const balanceEl    = document.getElementById("balance");
const connectBtn   = document.getElementById("connectWallet");
const mintBtn      = document.getElementById("mintButton");
const mintInput    = document.getElementById("mintAmount");

// Helpers
function updateStatus(text, color = "#ffcc66") {
  if (statusSpan) {
    statusSpan.textContent = text;
    statusSpan.style.color = color;
  }
}

function updateBalance() {
  if (balanceEl) {
    balanceEl.textContent = rocBalance.toLocaleString();
  }
}

// Demo: "connect" a fake wallet
function connectDemoWallet() {
  walletConnected = true;

  const randomId = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const demoAddress = `0xROCKET...${randomId}`;

  updateStatus(`Connected (demo) — ${demoAddress}`, "#58a6ff");
}

// Demo: "mint" ROC-T and increase balance
function mintDemoTokens() {
  if (!walletConnected) {
    updateStatus("Connect wallet first.", "#f85149");
    return;
  }

  const amount = parseFloat(mintInput.value);
  if (isNaN(amount) || amount <= 0) {
    updateStatus("Enter a valid amount to mint.", "#f85149");
    return;
  }

  rocBalance += amount;
  updateBalance();
  updateStatus(`Minted ${amount} ROC-T (demo).`, "#3fb950");

  mintInput.value = "";
}

// Connect button
if (connectBtn) {
  connectBtn.addEventListener("click", () => {
    if (!walletConnected) {
      connectDemoWallet();
    } else {
      updateStatus("Wallet already connected (demo).", "#58a6ff");
    }
  });
}

// Mint button
if (mintBtn) {
  mintBtn.addEventListener("click", () => {
    mintDemoTokens();
  });
}

// On load
window.addEventListener("load", () => {
  updateStatus("Not connected");
  updateBalance();
});
