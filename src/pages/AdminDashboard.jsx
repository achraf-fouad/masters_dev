import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Check, Clock, X, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/admin');
            return;
        }
        fetchOrders();
    }, [navigate]);

    const fetchOrders = async () => {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from('orders')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;
            fetchOrders(); // Refresh list
        } catch (error) {
            console.error('Error updating status:', error.message);
            alert('Failed to update status');
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader className="animate-spin text-primary" size={48} /></div>;

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Project Requests</h1>
                    <button onClick={() => { localStorage.removeItem('isAdmin'); navigate('/admin'); }} className="text-red-500 font-medium hover:text-red-700">Logout</button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-4 font-semibold text-slate-600">Client</th>
                                    <th className="p-4 font-semibold text-slate-600">Business</th>
                                    <th className="p-4 font-semibold text-slate-600">Message</th>
                                    <th className="p-4 font-semibold text-slate-600">Status</th>
                                    <th className="p-4 font-semibold text-slate-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4">
                                            <div className="font-medium text-slate-900">{order.name}</div>
                                            <div className="text-sm text-slate-500">{order.email}</div>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-medium text-slate-900">{order.business_name}</div>
                                            <div className="text-sm text-slate-500">{order.business_type}</div>
                                        </td>
                                        <td className="p-4 max-w-xs text-sm text-slate-600 truncate" title={order.message}>
                                            {order.message}
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                    order.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {order.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="p-4 flex gap-2">
                                            <button
                                                onClick={() => updateStatus(order.id, 'confirmed')}
                                                className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                                                title="Confirm"
                                            >
                                                <Check size={18} />
                                            </button>
                                            <button
                                                onClick={() => updateStatus(order.id, 'pending')}
                                                className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors"
                                                title="Mark Pending"
                                            >
                                                <Clock size={18} />
                                            </button>
                                            <button
                                                onClick={() => updateStatus(order.id, 'rejected')}
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                                                title="Reject"
                                            >
                                                <X size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {orders.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="p-8 text-center text-slate-500">
                                            No project requests found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
