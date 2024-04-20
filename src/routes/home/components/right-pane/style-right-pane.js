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
export const ProblemContainer = styled.div`
    display: flex;
`
export const Container = styled.div`
    position: relative;
    width: 40%;
    @media (max-width: 700px){
        display: none;
    }
`
export const StickyContainer = styled.div`
    padding: 40px;
    line-height: 1.3;
    white-space: pre-wrap;
    position: sticky;
    top: 0;
`
export const Timer = styled.div`
    display: flex;
    align-items: center;
`
export const TimerCTA = styled.p`
    border: 1px solid #dcd6d6;
    padding: 4px 8px;
    border-radius: 4px;
    width: fit-content;
    cursor: pointer;
    x-shadow: inset 0 -1px 0 #cfc0c0;
    background: ${props => props.$time > 0 ? '#f47979' : '#e3dfdf'};
`
export const Time = styled.p`
    font-size: 16px;
    margin-left: 20px;
`