import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ScamPage() {
    const location = useLocation();

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token');  // Directly get the token from search parameters

        if (!token) {
            console.error('No token provided in URL');
            return;
        }

        const trackClick = async () => {
            try {
                const response = await axios.post('http://localhost:5000/track-click', { token });
                console.log('Track click response:', response.data);
            } catch (error) {
                console.error('Failed to track click:', error);
            }
        };

        trackClick();
    }, [location.search]); // Dependency array ensures effect runs when search params change

    return (
        <div>
            <h1>Caution: You Almost Got Scammed!</h1>
            <p>You clicked on a link that could have led to a scam. Thankfully, this time it was a safe demonstration.</p>
            <p>To ensure you recognize authentic emails from your bank:</p>
            <ul>
                <li>Always check the sender's email address.</li>
                <li>Look for official bank communication channels.</li>
                <li>Never share your personal information through insecure platforms.</li>
            </ul>
        </div>
    );
}

export default ScamPage;
