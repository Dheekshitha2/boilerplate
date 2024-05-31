import React from 'react';

function LevelBadge({ level }) {
    let badgeColor = '';
    switch(level) {
        case 'High':
            badgeColor = 'badge-error'; // red
            break;
        case 'Moderate':
            badgeColor = 'badge-warning'; // yellow
            break;
        case 'Low':
            badgeColor = 'badge-success'; // green
            break;
        default:
            badgeColor = 'badge-neutral'; // gray
    }

    return (
        <span className={`badge ${badgeColor} w-28`}>{level}</span>
    );
}

export default LevelBadge;
