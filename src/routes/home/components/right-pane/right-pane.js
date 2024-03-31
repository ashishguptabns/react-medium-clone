import { useEffect, useRef, useState } from 'react'
import styled from "styled-components";
import { useProblem } from './use-problem';

export const RefreshButton = styled.div`
    width: 70px;
    background: green;
    color: white;
    font-size: 14px;
    border-radius: 10px;
    padding: 6px;
    margin-left: 40px;
    cursor: pointer;
    text-align: center;
    height: fit-content;
    align-self: center;
`
export const DoneButton = styled.div`
    width: 70px;
    background: #dfd7d7;
    color: black;
    font-size: 14px;
    border-radius: 10px;
    padding: 6px;
    margin-left: 10px;
    cursor: pointer;
    text-align: center;
    height: fit-content;
    align-self: center;
`
const ProblemContainer = styled.div`
    display: flex;
`
const Container = styled.div`
    position: relative;
    width: 40%;
    @media (max-width: 700px){
        display: none;
    }
`
const StickyContainer = styled.div`
    padding: 40px;
    line-height: 1.3;
    white-space: pre-wrap;
    position: sticky;
    top: 0;
`
const Timer = styled.div`
    display: flex;
    align-items: center;
`
const TimerCTA = styled.p`
    border: 1px solid #dcd6d6;
    padding: 4px 8px;
    border-radius: 4px;
    width: fit-content;
    cursor: pointer;
    x-shadow: inset 0 -1px 0 #cfc0c0;
    background: ${props => props.$time > 0 ? '#f47979' : '#e3dfdf'};
`
const Time = styled.p`
    font-size: 16px;
    margin-left: 20px;
`
export const HomeRightPane = () => {
    const [secondsSpent, setSecondsSpent] = useState(0)
    const timerRef = useRef(null)
    const startTimeRef = useRef()
    const [problem, setRefresh, refresh] = useProblem()

    const handleRefresh = () => {
        setRefresh(!refresh)
    }
    useEffect(() => {
        return () => {
            stopTimer()
        }
    })
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
    const handleDone = () => {
        localStorage.setItem(problem.substring(0, 20), Date.now());
        handleRefresh()
    }

    return <Container>
        <StickyContainer>
            <ProblemContainer>
                <h2>Solve this Problem</h2>
                <RefreshButton onClick={handleRefresh}>Shuffle</RefreshButton>
                <DoneButton onClick={handleDone}>Done</DoneButton>
            </ProblemContainer>
            {problem}
            <Timer>
                <TimerCTA $time={secondsSpent} onClick={handleTimer}>
                    {secondsSpent === 0 ? 'Start timer' : 'Stop timer'}
                </TimerCTA>
                <Time>
                    {`${Math.floor(secondsSpent / 60)} m : ${secondsSpent % 60} s`}
                </Time>
            </Timer>
        </StickyContainer>
    </Container>
}