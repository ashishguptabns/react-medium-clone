import styled from "styled-components"
import { Tab } from "./tab"

const Container = styled.div`
    display: flex;
    overflow: hidden;
    box-shadow: inset 0 -1px 0 #F2F2F2;
    scrollbar-width: none;
    margin: 16px 24px 0 24px;
`

export const Tabs = () => {
    return <Container>
        <Tab title='For you' />
        <Tab title='Following' />
        <Tab title='React' />
        <Tab title='Javascript' />
        <Tab title='' />
    </Container>
}