import styled from "styled-components"
import { Link } from 'react-router-dom'

export const HrefContainer = styled(Link)`
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
`
export const Container = styled.div`
    cursor: pointer;
    max-height: 340px;
    margin: 0 24px 10px 24px;
    padding: 10px 0;
    border-bottom: solid 1px #e8e2e2;
    @media (max-width: 700px) {
        padding: 0 0 10px 0;
    }
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
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-height: 72px;
    line-height: 24px;
    font-size: 20px;
    color: #242424;
    overflow: hidden;
    margin: 0;
    @media (max-width: 700px) {
        font-size: 16px;
    }
`
export const Description = styled.p`
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-height: 72px;
    line-height: 24px;
    font-size: 16px;
    color: #242424;
    margin: 6px 0;
    overflow: hidden;
    @media (max-width: 700px) {
        font-size: 14px;
        -webkit-line-clamp: 2;
    }
`
export const ArticleImg = styled.img`
    width: 112px;
    aspect-ratio: auto 112 / 112;
    height: 112px;
    margin-left: 20px;
    border-radius: 10px;
    @media (max-width: 700px) {
        width: 80px;
        aspect-ratio: auto 1;
        height: 80px;
    }
`
export const ArticleTextContainer = styled.div`
    width: 100%;
`