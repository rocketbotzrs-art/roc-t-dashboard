// === ROC-T Demo Wallet (Local Storage Version) ===

// Load saved state
let walletConnected = localStorage.getItem("roc_walletConnected") === "true";
let rocBalance = parseInt(localStorage.getItem("roc_balance")) || 0;

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

    connectBtn.textContent = walletConnected
        ? "Disconnect Wallet"
        : "Connect Wallet";

    balanceEl.textContent = rocBalance;
}

// Save state
function saveState() {
    localStorage.setItem("roc_walletConnected", walletConnected);
    localStorage.setItem("roc_balance", String(rocBalance));
}

// Connect / Disconnect toggle
connectBtn.addEventListener("click", () => {
    walletConnected = !walletConnected;
    saveState();
    updateUI();
});

// Mint logic
mintBtn.addEventListener("click", () => {
    if (!walletConnected) {
        alert("Please connect your wallet first.");
        return;
    }

    const amount = parseInt(mintInput.value, 10);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount to mint.");
        return;
    }

    rocBalance += amount;
    saveState();
    updateUI();
});

// Burn logic
burnBtn.addEventListener("click", () => {
    if (!walletConnected) {
        alert("Please connect your wallet first.");
        return;
    }

    const amount = parseInt(burnInput.value, 10);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount to burn.");
        return;
    }

    if (amount > rocBalance) {
        alert("You cannot burn more than your balance.");
        return;
    }

    rocBalance -= amount;
    saveState();
    updateUI();
});

// Load UI on start
updateUI();
