import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<Routes>
      <Route path="/:referral" element={<Home />} />
      <Route path="/" element={<Home />} />
</Routes>
  );
}

export default App;
