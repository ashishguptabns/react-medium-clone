import { useEffect, useState } from 'react'
import problems from '../../../../lib/dsa-problems'
import styled from "styled-components";

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
export const HomeRightPane = () => {
    const [problem, setProblem] = useState()
    const [refresh, setRefresh] = useState()

    useEffect(() => {
        const randomNum = Math.random() * (problems.length - 1)
        setProblem(problems[Math.floor(randomNum)])
    }, [refresh])

    const handleRefresh = () => {
        setRefresh(!refresh)
    }

    return <Container>
        <StickyContainer>
            <ProblemContainer>
                <h2>Solve this Problem</h2>
                <RefreshButton onClick={handleRefresh}>Refresh</RefreshButton>
            </ProblemContainer>
            {problem}
        </StickyContainer>
    </Container>
}