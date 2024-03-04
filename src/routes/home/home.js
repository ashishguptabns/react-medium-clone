import { useEffect } from "react";
import { HomeLeftPane } from "./components/left-pane/left-pane";
import { HomeRightPane } from "./components/right-pane/right-pane";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`
export const Home = () => {
    useEffect(() => {
        document.title = 'Coding Interview Guide';
    }, []);

    return (
        <HomeContainer>
            <HomeLeftPane />
            <HomeRightPane />
        </HomeContainer>
    )
}