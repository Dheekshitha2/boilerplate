import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ScamPage() {
    const location = useLocation();

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token');

        if (!token) {
            console.error('No token provided in URL');
            return;
        }

        const trackClick = async () => {
            try {
                const response = await axios.post('https://fraud-zero-1.fly.dev/track-click', { token });
                console.log('Track click response:', response.data);
            } catch (error) {
                console.error('Failed to track click:', error);
            }
        };

        trackClick();
    }, [location.search]); // Dependency array ensures effect runs when search params change

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-10 z-50 overflow-hidden">
            <div className="bg-white p-12 rounded-2xl shadow-lg w-2/3 max-w-5xl overflow-auto max-h-full mt-12">
                <div className="flex items-center justify-center bg-red-500 text-white font-bold text-3xl w-full h-20 rounded-xl mb-8">Caution: You Almost Got Scammed!</div>
                <div className="text-center font-semibold text-xl">  You clicked on a link that could have led to a scam.</div>
                <div className="text-center font-normal mb-10 text-lg">   Thankfully, this time it was a safe demonstration. </div>

                <div className="flex justify-center w-full h-10 rounded-xl text-lg">To ensure you recognize authentic emails from your bank:</div>
                <div className="flex justify-center w-full rounded-xl">
                    <ul className="list-disc pl-12 justify-center">
                        <li>Always check the sender's email address.</li>
                        <li>Look for official bank communication channels.</li>
                        <li>Never share your personal information through insecure platforms.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ScamPage;
