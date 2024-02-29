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
        width: 240px;
        height: 40px;
        background: #F9F9F9;
        border-radius: 20px;
        border: none;
        padding: 0 12px;
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
`

export const NotifIcon = styled.a`
    cursor: pointer;
    margin: 0 24px;
    color: #6B6B6B;
`

export const ProfileImg = styled.a`
    cursor: pointer;
    display: inline-block;
    width: 40px; 
    height: 40px;
    background-image: url('https://miro.medium.com/v2/resize:fill:64:64/1*wMnxt9B3gQMzycxq4y7tYw.png');
    background-size: cover;
    border-radius: 50%;
`