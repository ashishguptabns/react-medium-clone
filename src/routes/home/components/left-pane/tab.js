import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { setTab } from "../../home-slice"

const Container = styled.div`
    min-width: max-content;
    border-bottom: 1px solid #242424;
    padding-bottom: 16px;
    margin-right: 32px;
    cursor: pointer;
    color: ${props => props.$isSelected ? '#242424' : 'gray'};
    font-size: 14px;
`

export const Tab = ({ title }) => {
    const currTab = useSelector((state) => state.home.currTab)
    const dispatch = useDispatch()

    const handleTabClick = () => dispatch(setTab(title))

    return <Container onClick={handleTabClick} $isSelected={currTab === title}>{title}</Container>
}