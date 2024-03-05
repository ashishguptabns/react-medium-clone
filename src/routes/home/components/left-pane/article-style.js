import styled from "styled-components"

export const HrefContainer = styled.a`
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
`
export const Container = styled.div`
    cursor: pointer;
    max-height: 340px;
    margin: 0 24px 10px 24px;
    padding-bottom: 10px;
    border-bottom: solid 1px #e8e2e2;
`
export const CenteredRow = styled.div`
    display: flex;
    align-items: center;
`
export const ProfileImg = styled.img`
    width: 24px; 
    height: 24px;
    border-radius: 50%;
`
export const UserName = styled.p`
    font-size: 14px;
    color: #242424;
    margin: 0 10px;
`
export const UpdatedTime = styled.p`
    color: #6B6B6B;
    font-size: 14px;
`
export const Heading = styled.h2`
    -webkit-line-clamp: 3;
    max-height: 72px;
    line-height: 24px;
    font-size: 20px;
    color: #242424;
    overflow: hidden;
    margin: 0;
`
export const Description = styled.p`
    -webkit-line-clamp: 3;
    max-height: 72px;
    line-height: 24px;
    font-size: 16px;
    color: #242424;
    margin: 6px 0;
    overflow: hidden;
`
export const ArticleImage = styled.img`
    width: 112px;
    aspect-ratio: auto 112 / 112;
    height: 112px;
    margin-left: 20px;
    border-radius: 10px;
`
export const ArticleTextContainer = styled.div`
    width: 100%;
`