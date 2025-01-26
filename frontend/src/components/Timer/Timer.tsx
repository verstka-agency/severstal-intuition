import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Timer.scss'
import { useProfile } from "src/hooks"

const Timer = () => {
    const [countdown, setCountdown] = useState(60)
    const { setNextQuestion } = useProfile()
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 0) {
                    clearInterval(timer)
                    setNextQuestion()
                    navigate("/")
                    return 0
                }
                return prevCount - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [navigate])

    // SVG arc calculation
    const radius = 25 // Adjusted to fit within 60x60 with 10px stroke
    const circumference = 2 * Math.PI * radius
    const progressLength = circumference * 0.8 // 80% of the full circle
    const strokeDashoffset = ((60 - countdown) / 60) * progressLength

    // Calculate start and end points for the 80% arc
    const startAngle = Math.PI / 2 + Math.PI * 2 * 0.1 // Start 10% after the bottom
    const endAngle = startAngle + Math.PI * 2 * 0.8 // End at 80% of the circle, moving clockwise

    const start = {
        x: 30 + radius * Math.cos(startAngle),
        y: 30 + radius * Math.sin(startAngle),
    }
    const end = {
        x: 30 + radius * Math.cos(endAngle),
        y: 30 + radius * Math.sin(endAngle),
    }

    const arcPath = `M ${start.x} ${start.y} A ${radius} ${radius} 0 1 1 ${end.x} ${end.y}`

    return (
        <div className="timer">
            <div className="timer__progress-bar">
                <svg width="60" height="60" viewBox="0 0 60 60">
                    {/* Background arc (red) */}
                    <path d={arcPath} fill="none" stroke="#ff0000" strokeWidth={10} strokeLinecap="round"/>

                    {/* Progress arc (white) */}
                    <path
                        d={arcPath}
                        fill="none"
                        stroke="white"
                        strokeWidth={10}
                        strokeLinecap="round"
                        strokeDasharray={`${progressLength} ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                            transition: "stroke-dashoffset 1s linear",
                        }}
                        transform="scale(1, 1) translate(0, 0)" // Updated transform attribute
                    />
                </svg>

                {/* Center number */}
                <div className="int-2 white timer__countdown">
                    {countdown}
                </div>
            </div>
        </div>
    )
}

export default Timer