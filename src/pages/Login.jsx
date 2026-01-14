import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') { // Simple hardcoded password for now
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Invalid Password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full text-primary">
                        <Lock size={32} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6 text-slate-900">Admin Access</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter admin password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
