import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setTab } from '../../routes/home/home-slice';

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
    cursor: pointer;
`
export const SearchDropdown = ({ isOpen }) => {
    const dispatch = useDispatch()
    const handleClick = (event) => {
        dispatch(setTab(event.target.innerText))
        isOpen = false
    }
    return (
        <>
            {isOpen && <Container>
                <Item onClick={handleClick}>React</Item>
                <Item onClick={handleClick}>Javascript</Item>
                <Item onClick={handleClick}>System Design</Item>
                <Item onClick={handleClick}>Node</Item>
            </Container>}
        </>
    )
};
