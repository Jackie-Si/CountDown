import React, { useEffect, useState } from "react";

const Countdown = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');   

    useEffect(() => {
        const myBithday = new Date('December 4, 2022 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = myBithday - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            }
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
        return () => clearInterval(interval);
    });
    
    return (
        <div className="countdown">
            <div className="countdown-item">
                <div className="countdown-item-value">{days}</div>
                <div className="countdown-item-label">Days</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
                <div className="countdown-item-value">{hours}</div>
                <div className="countdown-item-label">Hours</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
                <div className="countdown-item-value">{minutes}</div>
                <div className="countdown-item-label">Minutes</div>
            </div>
            <span>:</span>
            <div className="countdown-item">
                <div className="countdown-item-value">{seconds}</div>
                <div className="countdown-item-label">Seconds</div>
            </div>
        </div>
    );
};

export default Countdown;