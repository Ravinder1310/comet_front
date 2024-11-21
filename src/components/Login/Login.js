import React, { useState, useEffect } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/auth';

const Login = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isBSC, setIsBSC] = useState(false); // Check if user is on Binance Smart Chain
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();

    // Fetch wallet address and check network
    useEffect(() => {
        const checkWalletAndNetwork = async () => {
            if (window.ethereum) {
                try {
                    // Request wallet connection
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setWalletAddress(accounts[0]);

                    // Check network (Binance Smart Chain)
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                    if (chainId === '0x38') {
                        setIsBSC(true); // Binance Smart Chain
                    } else {
                        setIsBSC(false);
                        toast.error('Please switch to Binance Smart Chain (BSC).');
                    }
                } catch (error) {
                    console.error('Wallet error:', error);
                }
            } else {
                toast.error('MetaMask or a DApp browser is required!');
            }
        };

        checkWalletAndNetwork();

        // Network change listener
        window.ethereum?.on('chainChanged', (chainId) => {
            if (chainId === '0x38') {
                setIsBSC(true);
                toast.success('Switched to Binance Smart Chain (BSC).');
            } else {
                setIsBSC(false);
                toast.error('Please switch to Binance Smart Chain (BSC).');
            }
        });

        // Account change listener
        window.ethereum?.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
            } else {
                setWalletAddress('');
                toast.error('Wallet disconnected. Please reconnect.');
            }
        });
    }, []);

    // Handle login submission
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!walletAddress) {
            toast.error('No wallet address detected.');
            setLoading(false);
            return;
        }

        if (!isBSC) {
            toast.error('Please switch to Binance Smart Chain (BSC).');
            setLoading(false);
            return;
        }

        try {
            // console.log('iser');
            
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/user/login`,
                { walletAddress },
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
            );

            if (response.data.success) {
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token,
                  });
                localStorage.setItem('auth', JSON.stringify(response.data)); // Save user to localStorage
                toast.success('Login successful!');
                navigate('/');  // Redirect to homepage
            } else {
                setError(response.data.message);
                toast.error(response.data.message);
            }
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'An error occurred. Please try again.';
            setError(errorMsg);
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
      <button className="mt-4" onClick={() => {navigate(-1)}}> 🔙 </button>
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <input
                            type="text"
                            value={walletAddress || ''}
                            placeholder="Wallet Address"
                            disabled
                        />
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <button
                        id="btn"
                        className={`bg-gray-500 text-white w-full py-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={loading || !walletAddress}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p>
                        Don't have an account?{' '}
                        <a className="text-purple-800" href="/register">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
