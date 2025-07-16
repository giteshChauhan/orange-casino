import React, { useState, useContext, useEffect } from 'react';
import api from '../services/api';
import { SocketContext } from '../contexts/SocketContext';
import toaster from '../utils/toaster';

const symbols: string[] = ['⭐', '🍒', '🔔', '🍋', '💎'];

export default function SlotMachine(): JSX.Element {
    const [reels, setReels] = useState<string[]>(['', '', '']);
    const [wager, setWager] = useState<number>(100);
    const [loading, setLoading] = useState<boolean>(false);
    const [leverPulled, setLeverPulled] = useState<boolean>(false);
    const socket = useContext(SocketContext);

    // Real Time Spin Events

    useEffect(() => {
        if (!socket) return;
        const handleRealtime = (data: { result: string[]; payout: number, message: string | undefined }) => {
            const { result, payout, message = '' } = data;
            if (message) toaster(message);
            else toaster(`Result: ${result.join(' ')} ${payout >= 0 ? '+' : ''}${payout}`);

        };
        socket.on('spin', handleRealtime);
        return () => {
            socket.off('spin', handleRealtime);
        };
    }, [socket]);

    const handleSpin = async (): Promise<void> => {
        if (loading) return;
        // Animate lever
        setLeverPulled(true);
        setTimeout(() => setLeverPulled(false), 200);

        setLoading(true);
        // Start local spin simulation
        const intervals: NodeJS.Timeout[] = reels.map((_, i) =>
            setInterval(() => {
                setReels(prev => {
                    const c = [...prev];
                    c[i] = symbols[Math.floor(Math.random() * symbols.length)];
                    return c;
                });
            }, 80)
        );

        try {
            const { data } = await api.post<{ result: string[]; payout: number }>('/spin', { wager });
            intervals.forEach(clearInterval);
            setReels(data.result);
        } catch (err: any) {
            console.error(err);
            intervals.forEach(clearInterval);
            toaster(err.response?.data?.message || 'Spin failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Slot Machine</h2>

            <div className="flex space-x-4">
                {/* Reels */}
                {reels.map((s, i) => (
                    <div
                        key={i}
                        className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 text-white text-3xl md:text-4xl flex items-center justify-center rounded-lg shadow-inner"
                    >
                        {s || '?'}
                    </div>
                ))}

                {/* Lever */}
                <div
                    onClick={handleSpin}
                    className={`w-3 h-24 md:w-4 md:h-32 bg-gray-800 rounded-full relative cursor-pointer transform transition-transform ${leverPulled ? 'rotate-30' : 'rotate-0'
                        }`}
                    style={{ transformOrigin: 'top center' }}
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 border-2 border-yellow-300 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
                </div>
            </div>

            <div className="w-full max-w-xs mb-4 text-start">
                <input
                    type="number"
                    aria-label="Wager"
                    value={wager}
                    onChange={e => setWager(Number(e.target.value))}
                    className="w-[90%] p-2 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
        </div>
    );
}
