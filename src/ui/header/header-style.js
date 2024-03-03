import styled from 'styled-components'

export const Container = styled.div`
        align-items: center;
        padding: 0 24px;
        border-bottom: solid 1px #F2F2F2;
        display: flex;
        height: 57px 
    `
export const LeftContainer = styled.div`
        display: flex;
        align-items: center;
        flex: 1 0 auto
    `
export const HomeIcon = styled.a`
        cursor: pointer;
        display: inline-block;
        width: 40px; 
        height: 40px;
        background-image: url('https://www.iconpacks.net/icons/2/free-medium-icon-2177-thumb.png');
        background-size: cover;
    `
export const SearchBox = styled.div`
        display: flex;
        align-items: center;
        margin-left: 16px;
        width: 100px;
        height: 40px;
        background: #F9F9F9;
        border-radius: 20px;
        border: none;
        padding: 0 6px;
        transition: width 0.3s ease; 
        &:focus-within {
            width: 160px; 
        }
        @media (min-width: 768px) {
            width: 240px;
            &:focus-within {
                width: 400px; 
            }
        }
    `
export const SearchInput = styled.input`
        color: #242424;
        background-color: transparent;
        padding: 10px 20px 10px 10px;
        width: 100%;
        font-size: 14px;
        outline: none;
        border: none;
        line-height: 20px;
    `
export const WriteBox = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #6B6B6B;
    margin: 0 24px;
`

export const NotifIcon = styled.div`
    cursor: default;
    margin: 0 24px;
    color: #6B6B6B;
`

export const ProfileImg = styled.img`
    width: 40px; 
    height: 40px;
    border-radius: 50%;
`
export const EditCTA = styled.p`
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`