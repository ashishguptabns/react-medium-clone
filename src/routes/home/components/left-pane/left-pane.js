import styled from "styled-components"
import { Tabs } from "./tabs"
import { ListArticles } from "./list-articles"

const Container = styled.div`
    display: block;
    border-right: 1px solid #F2F2F2;
    min-height: 500px;
    width: 70%;
    padding: 20px;
`

export const HomeLeftPane = () => {
    return (
        <Container>
            <Tabs />
            <ListArticles />
        </Container>
    )
}