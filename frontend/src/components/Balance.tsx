import { useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { SocketContext } from '../contexts/SocketContext';

export default function Balance(): JSX.Element {
    const [balance, setBalance] = useState<number | null>(null);
    const socket = useContext(SocketContext);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const { data } = await api.get<{ balance: number }>('/balance');
                setBalance(data.balance);
            } catch (err) { }
        };
        fetchBalance();
    }, []);


    useEffect(() => {
        if (!socket) return;
        const handler = (data: { balance: number }) => {
            setBalance(data.balance);
        };
        socket.on('spin', handler);
        return () => { socket.off('spin', handler); };
    }, [socket]);

    return (
        <div className="text-gray-700 font-medium flex border rounded border-gray-200 px-2 py-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-1 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {balance !== null ? (
                <span >
                    {balance}</span>
            ) : '...'}
        </div>
    );
}
