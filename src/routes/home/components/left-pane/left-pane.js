import styled from "styled-components"
import { Tabs } from "./tabs"
import { ListArticles } from "./list-articles"

const Container = styled.div`
    display: block;
    border-right: 1px solid #F2F2F2;
    min-height: 500px;
    width: 100%;
    padding: 10px 0;
    @media (min-width: 768px) {
        width: 60%;
        padding: 10px;
    }
`

export const HomeLeftPane = () => {
    return (
        <Container>
            <Tabs />
            <ListArticles />
        </Container>
    )
}