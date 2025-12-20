import React, { useEffect, useState } from 'react'

export default function CountdownTimer({ minutes = 10, onEnd }) {
    const [timeLeft, setTimeLeft] = useState(minutes * 60)

    useEffect(() => {
        if (timeLeft <= 0) {
            if (onEnd) onEnd()
            return
        }

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft])

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60)
        const s = sec % 60
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
    }

    return (
        <div className="text-sky-600 font-semibold text-xl">
            {formatTime(timeLeft)}
        </div>
    )
}
