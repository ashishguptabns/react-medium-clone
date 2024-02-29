import styled from "styled-components"

const Container=styled.div`
    min-width: max-content;
    border-bottom: 1px solid #242424;
    padding-bottom: 16px;
    margin-right: 32px;
    cursor: pointer;
    color: #242424;
    font-size: 14px;
`

export const Tab = ({ title }) => {
    return <Container>{title}</Container>
}