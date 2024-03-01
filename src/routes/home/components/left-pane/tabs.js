import styled from "styled-components"
import { Tab } from "./tab"
import { useEffect } from "react"
import { useState } from "react"
import { fetchTabsUseCase } from "../../../../lib/data"

const Container = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    background: white;
    overflow: hidden;
    box-shadow: inset 0 -1px 0 #F2F2F2;
    scrollbar-width: none;
    margin: 0 24px;
`

export const Tabs = () => {
    const [tabs, setTabs] = useState([])

    const fetchTabs = async () => {
        const tabs = await fetchTabsUseCase()
        setTabs(tabs)
    }
    useEffect(() => {
        fetchTabs()
    }, [])

    return (
        <Container>
            {tabs.length > 0 && tabs.map(tab => <Tab key={tab.id} title={tab.title} />)}
        </Container>
    )
}