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
import BnbKombat from './components/incomes/bnbKombat';
import MyTeam from './components/myTeam/team';
import WithdrawlUplineIncome from './components/incomes/withdrawlUpline';
import GlobalIncome from './components/incomes/globalIncome';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/users" element={<PrivateRoute />}>
      <Route path="user/wallet-details" element={<WalletDetails />} />
      <Route path="user/wallet-deposite" element={<WalletDeposite />} />
      <Route path="user/direct-income" element={<AirdropIncome />} />
      <Route path="user/airdrop-income" element={<BnbKombat />} />
      <Route path="user/f50-income" element={<F50Income />} />
      <Route path="user/magic-income" element={<MagicIncome />} />
      <Route path="user/airdrop-income" element={<DirectIncome />} />
      <Route path="user/upline-income" element={<UplineIncome />} />
      <Route path="user/withdrawl-upline-income" element={<WithdrawlUplineIncome />} />
      <Route path="user/global-income" element={<GlobalIncome />} />
      <Route path="user/withdrawl" element={<WithdrawlHistory />} />
      {/* <Route path="user/recharge" element={<RechargeHistory />} /> */}
      <Route path="user/myteam" element={<MyTeam />} />
      <Route path="user/recharge-history" element={<RechargeHistory />} />
    </Route>

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
