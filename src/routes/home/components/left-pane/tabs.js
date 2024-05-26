import styled from "styled-components"
import { Tab } from "./tab"
import { useEffect } from "react"
import { useState } from "react"
import { fetchTabsUseCase } from "../../../../lib/data-service"
import { blankTabs } from "../../../../lib/mock-data"
import { useDispatch } from "react-redux"
import { setTab } from "../../home-slice"
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    background: white;
    overflow-x: scroll;
    box-shadow: inset 0 -1px 0 #F2F2F2;
    scrollbar-width: none;
    margin: 0 24px;
`

export const Tabs = () => {
    const [tabs, setTabs] = useState([])
    const dispatch = useDispatch()
    const location = useLocation();

    const fetchTabs = () => {
        setTabs(blankTabs)
        fetchTabsUseCase().then(data => setTabs(data))
    }
    const handleURLTag = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const tag = (urlParams.get('tag') || 'Java');
        dispatch(setTab(tag))
    }
    useEffect(() => {
        handleURLTag()
    }, [location])
    useEffect(() => {
        fetchTabs()
    }, [])

    return (
        <Container>
            {tabs.map(tab => <Tab key={tab.id} title={tab.title} />)}
        </Container>
    )
}