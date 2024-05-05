import React from 'react';
import moment from 'moment';

import "./CurrentWeek.scss";

const CurrentWeek = () => {
    const renderCurrentWeek = () => {
        const startOfWeek = moment().startOf('isoWeek');
        const days = [];
        for (let i = 0; i < 7; i++) {
            const day = moment(startOfWeek).add(i, 'days');
            const dayNumber = day.format('D');
            const dayName = day.format('ddd').toLowerCase();
            days.push(
                <div key={i} className="day-box">
                    {dayNumber}/
                    <span className="day-box__span">{dayName}</span>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="current-week__date-line">
            {renderCurrentWeek()}
        </div>
    );
};

export default CurrentWeek;