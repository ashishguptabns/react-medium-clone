import { useEffect, useState } from 'react'
import problems from '../../../../lib/dsa-problems'
import styled from "styled-components";

const Container = styled.div`
    padding: 40px;
    line-height: 1.3;
    white-space: pre-wrap;
    width: 40%;
    @media (max-width: 700px){
        display: none;
    }
`
export const HomeRightPane = () => {
    const [problem, setProblem] = useState()

    useEffect(() => {
        const randomNum = Math.random() * problems.length
        setProblem(problems[Math.floor(randomNum)])
    }, [])

    return <Container>
        <h2>Solve this Problem</h2>
        {problem}
    </Container>
}