// === ROC-T Demo Wallet Logic ===
// This is a UI-only demo. No blockchain. Just shows how minting would work.

let walletConnected = false;
let rocBalance = 0;

// Grab elements
const statusSpan = document.getElementById("walletStatus");
const balanceEl = document.getElementById("balance");
const connectBtn = document.getElementById("connectWallet");
const mintBtn = document.getElementById("mintBtn");
const mintInput = document.getElementById("mintAmount");

// Connect wallet (demo)
connectBtn.addEventListener("click", () => {
    walletConnected = !walletConnected;

    if (walletConnected) {
        statusSpan.textContent = "Connected (demo) — 0xROCKET...3093";
        statusSpan.style.color = "#4CAF50";
    } else {
        statusSpan.textContent = "Disconnected";
        statusSpan.style.color = "red";
    }
});

// Mint ROC-T (demo)
mintBtn.addEventListener("click", () => {
    if (!walletConnected) {
        alert("Please connect wallet first.");
        return;
    }

    const amount = parseInt(mintInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    // Increase the balance
    rocBalance += amount;

    // Update UI
    balanceEl.textContent = rocBalance;

    // Reset input
    mintInput.value = "";
});
