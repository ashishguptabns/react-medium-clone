import SearchIcon from '@mui/icons-material/Search';
import { Container, HomeIcon, LeftContainer, SearchBox, SearchInput } from './style';

export const Header = () => {
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