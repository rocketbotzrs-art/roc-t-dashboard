
 🚀 ROC-T Dashboard

A full frontend dashboard for interacting with the **ROC-T Protocol**, including:

- Minting interface (ROC-T stablecoin / ROC-C denomination)
- Wallet tools (balances, transfers, approvals)
- Vault viewer (collateral pools, mint routes, health, yields)
- Governance panel (proposals, voting, execution status)
- Analytics + protocol metrics
- Admin mode (protocol owner actions: pause, versioning, events)

This dashboard is designed to connect to **Flare Network**, **Songbird**, or any EVM-compatible chain where ROC-T is deployed.

---

## 📁 **Folder Structure**

roc-t-dashboard/ ├── public/               # Static assets (icons, logos, manifest) ├── src/ │   ├── components/       # Reusable UI components │   ├── pages/ │   │    ├── Mint/ │   │    ├── Wallet/ │   │    ├── Vaults/ │   │    ├── Governance/ │   │    └── Analytics/ │   ├── hooks/            # Web3 + contract hooks │   ├── contracts/        # ABIs from roc-t-protocol repo │   ├── lib/              # Utility functions │   └── app.tsx           # Root app ├── .env.example          # Environment variables (RPC_URL, CHAIN_ID) ├── package.json ├── vite.config.js └── README.md

---

## 🔗 **Dependencies**

This dashboard uses:

- **React 18**
- **Vite**
- **TailwindCSS**
- **Ethers v6**
- **RainbowKit** (wallet connect)
- **Wagmi Hooks**
- **Recharts** (analytics)
- **Zustand** (state management)

---

## ⚙️ **Environment Variables**

Create a `.env` file:

VITE_RPC_URL="https://flare-api.flare.network/ext/bc/C/rpc" VITE_CHAIN_ID=14 VITE_CONTRACT_REGISTRY="0x..."

When deployment finishes, the dashboard auto-detects contracts from the **ROCGlobalRegistry**.

---

## 🎛️ Pages Overview

### **1️⃣ Minting Interface**
- Mint ROC-T
- Burn ROC-T
- View mint routes
- Check mint caps, fees, AI governors
- Connect wallets (MetaMask, Bifrost, Ledger)

### **2️⃣ Wallet Panel**
- See balances across all ROC assets:
  - ROC-T
  - ROC-C (denominations)
  - ROC Engine tokens
- Transfer tokens safely through ROCTransferPolicy

### **3️⃣ Vault Viewer**
Shows information from:
- ROCMintEngine
- ROCBurnEngine
- ROCGlobalState
- Active collateral sources (FLR, rFLR, sFLR, RLUSD, FXRP)

Includes:
- Vault health
- Yield streams
- Collateral breakdown
- Mintable amounts

### **4️⃣ Governance**
Connects to:
- ROCGovernor
- ROCGovernorExecution

Features:
- View proposals
- Vote
- Proposal timelock progress
- Cross-realm events feed

### **5️⃣ Analytics**
- Burn/mint history
- Global supply
- Vault health index
- Governance statistics
- Mesh-realm signals (beta)

---

## 🛠️ Running Locally

npm install npm run dev

Open:

http://localhost:5173

---

## 🌐 Deploy to GitHub Pages

This repo can be deployed instantly:

npm run build npm run deploy

---

## 🧩 Connect to ROC-T Protocol

This dashboard pulls ABIs from your main protocol repo:

rocketbotzrs-art/roc-t-protocol/contracts

You can copy ABIs into:

src/contracts/

Or fetch them automatically (recommended).

---

## 👨‍💻 Status

This repo is under active development as part of the **ROC-Tonga sovereign monetary protocol**.
