import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [currentTimer, setCurrentTimer] = useState<string>("")

    function timeUntilTomorrow(): string {
        const now: Date = new Date()
        const tomorrow: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

        const millisecondsUntilTomorrow: number = tomorrow.getTime() - now.getTime()

        const hours: number = Math.floor(millisecondsUntilTomorrow / (1000 * 60 * 60))
        const minutes: number = Math.floor((millisecondsUntilTomorrow % (1000 * 60 * 60)) / (1000 * 60))
        const seconds: number = Math.floor((millisecondsUntilTomorrow % (1000 * 60)) / 1000)

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentTimer(timeUntilTomorrow)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [currentTimer])

    return (
        <div className={"timer"}>
            {currentTimer}
        </div>
    )
}

export default Timer