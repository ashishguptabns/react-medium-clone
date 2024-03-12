import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 200px;
    background-color: white;
    border: 1px solid #F9F9F9;
    border-top: 1px solid white;
    z-index: 1;
    padding: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        width: 140px;
    }
`
const Item = styled.div`
    font-size: 16px;
    padding: 10px 14px;
    width: 100%;
`
export const StyledLink = styled(Link)`
    cursor: pointer;
    width: 100%;
    text-decoration: none;
    color: black;
`
export const SearchDropdown = ({ isOpen }) => {
    return (
        <>
            {isOpen && <Container>
                <StyledLink to={'/?tag=React'}>
                    <Item>React</Item>
                </StyledLink>
                <StyledLink to={'/?tag=Javascript'}>
                    <Item>Javascript</Item>
                </StyledLink>
                <StyledLink to={'/?tag=System Design'}>
                    <Item>System Design</Item>
                </StyledLink>
                <StyledLink to={'/?tag=Node'}>
                    <Item>Node</Item>
                </StyledLink>
            </Container>}
        </>
    )
};
