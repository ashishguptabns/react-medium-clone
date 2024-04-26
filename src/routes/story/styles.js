import styled from 'styled-components'

export const Tag = styled.div`
    cursor: pointer;
    border: solid 1px #F2F2F2;
    padding: 4px 10px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 10px;
    width: fit-content;
    color: ${props => props.$isSelected ? '#242424' : 'gray'};
    background: ${props => props.$isSelected ? '#e1e1e1' : 'white'};
`
export const TagsContainer = styled.div`
    position: relative;
    width: 300px;
    border-left: solid 1px #F2F2F2;
    padding: 30px 20px;
    text-align: -webkit-center;
    @media(max-width: 700px){
        display: none;
    }
`
export const Tags = styled.div`
    width: 100%;
    position: sticky;
    top: 20px;
`
export const Container = styled.div`
    display: flex;
`
export const Editor = styled.div`
    padding: 24px;
    width: 100%;
`