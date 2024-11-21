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
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Kombat from './components/kombat';
import ScrollToTop from './components/scrollTop';
import PrivateRoute from './components/routes/privateRoute';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/wallet-details" element={<PrivateRoute><WalletDetails /></PrivateRoute>} />
      <Route path="/wallet-deposite" element={<PrivateRoute><WalletDeposite /></PrivateRoute>} />
      <Route path="/airdrop-income" element={<PrivateRoute><AirdropIncome /></PrivateRoute>} />
      <Route path="/f50-income" element={<PrivateRoute><F50Income /></PrivateRoute>} />
      <Route path="/magic-income" element={<PrivateRoute><MagicIncome /></PrivateRoute>} />
      <Route path="/direct-income" element={<PrivateRoute><DirectIncome /></PrivateRoute>} />
      <Route path="/upline-income" element={<PrivateRoute><UplineIncome /></PrivateRoute>} />
      <Route path="/withdrawl" element={<PrivateRoute><WithdrawlHistory /></PrivateRoute>} />
      <Route path="/recharge" element={<PrivateRoute><RechargeHistory /></PrivateRoute>} />
      <Route path="/:referral" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/:referral" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/get-bnb" element={<Kombat />} />
      </Routes>
    </div>
  );
}

export default App;
