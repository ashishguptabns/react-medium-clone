import styled from "styled-components"
import { Tab } from "./tab"
import { useEffect } from "react"
import { useState } from "react"
import { fetchTabsUseCase } from "../../../../lib/data-service"
import { blankTabs } from "../../../../lib/mock-data"

const Container = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    background: white;
    overflow: auto;
    box-shadow: inset 0 -1px 0 #F2F2F2;
    scrollbar-width: none;
    margin: 0 24px;
`

export const Tabs = () => {
    const [tabs, setTabs] = useState([])

    const fetchTabs = () => {
        setTabs(blankTabs)
        fetchTabsUseCase().then(data => setTabs(data))
    }
    useEffect(() => {
        fetchTabs()
    }, [])

    return (
        <Container>
            {tabs.map(tab => <Tab key={tab.id} title={tab.title} />)}
        </Container>
    )
}