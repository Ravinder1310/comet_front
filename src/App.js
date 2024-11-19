import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import WalletDetails from './components/wallet/wallet';
import WalletDeposite from './components/wallet/deposite';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet-details" element={<WalletDetails />} />
      <Route path="/wallet-deposite" element={<WalletDeposite />} />
      </Routes>
    </div>
  );
}

export default App;
