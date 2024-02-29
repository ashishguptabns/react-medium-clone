import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    const Container = styled.div`
        align-items: center;
        padding: 0 24px;
        border-bottom: solid 1px #F2F2F2;
        display: flex;
        height: 57px 
    `
    const LeftContainer = styled.div`
        display: flex;
        align-items: center;
        flex: 1 0 auto
    `
    const HomeIcon = styled.a`
        cursor: pointer;
        display: inline-block;
        width: 40px; 
        height: 40px;
        background-image: url('https://www.iconpacks.net/icons/2/free-medium-icon-2177-thumb.png');
        background-size: cover;
    `
    const SearchBox = styled.div`
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
    const SearchInput = styled.input`
        color: #242424;
        background-color: transparent;
        padding: 10px 20px 10px 10px;
        width: 100%;
        font-size: 14px;
        outline: none;
        border: none;
        line-height: 20px;
    `
    return (
        <Container>
            <LeftContainer>
                <HomeIcon href={'/'} />
                <SearchBox>
                    <SearchIcon />
                    <SearchInput />
                </SearchBox>
            </LeftContainer>
        </Container>
    )
}