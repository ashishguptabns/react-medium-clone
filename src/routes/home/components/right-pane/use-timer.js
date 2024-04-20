import { useState, useRef, useEffect } from "react"

export const useTimer = () => {
    const [secondsSpent, setSecondsSpent] = useState(0)
    const timerRef = useRef(null)
    const startTimeRef = useRef()

    const stopTimer = () => {
        clearInterval(timerRef.current)
    }
    const handleTimer = () => {
        if (secondsSpent > 0) {
            setSecondsSpent(0)
            stopTimer()
        } else {
            startTimeRef.current = Date.now()
            timerRef.current = setInterval(() => {
                const currTime = Date.now()
                const diff = currTime - startTimeRef.current
                setSecondsSpent(Math.floor(diff / 1000))
            }, 1000);
        }
    }
    useEffect(() => {
        return () => {
            stopTimer()
        }
    }, [])

    return [secondsSpent, handleTimer]
}