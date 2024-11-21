import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import WalletDetails from './components/wallet/wallet';
import WalletDeposite from './components/wallet/deposite';
import AirdropIncome from './components/incomes/airdropIncome';
import F50Income from './components/incomes/f50Income';
import MagicIncome from './components/incomes/magicIncome';
import DirectIncome from './components/incomes/directIncome';
import UplineIncome from './components/incomes/uplineBonus';
import WithdrawlHistory from './components/withdrawl';
import RechargeHistory from './components/recharge';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/:referral" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/wallet-details" element={<WalletDetails />} />
      <Route path="/wallet-deposite" element={<WalletDeposite />} />
      <Route path="/airdrop-income" element={<AirdropIncome />} />
      <Route path="/f50-income" element={<F50Income />} />
      <Route path="/magic-income" element={<MagicIncome />} />
      <Route path="/direct-income" element={<DirectIncome />} />
      <Route path="/upline-income" element={<UplineIncome />} />
      <Route path="/withdrawl" element={<WithdrawlHistory />} />
      <Route path="/recharge" element={<RechargeHistory />} />
      </Routes>
    </div>
  );
}

export default App;
