import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Container, HomeIcon, LeftContainer, NotifIcon, ProfileImg, SearchBox, SearchInput, WriteBox } from './style';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

export const Header = () => {
    return (
        <Container>
            <LeftContainer>
                <HomeIcon href='/' />
                <SearchBox>
                    <SearchIcon />
                    <SearchInput placeholder='Search' />
                </SearchBox>
            </LeftContainer>
            <WriteBox href='/new-story'>
                <EditNoteOutlinedIcon />
                <p>Write</p>
            </WriteBox>
            <NotifIcon href='/notif'>
                <NotificationImportantOutlinedIcon />
            </NotifIcon>
            <ProfileImg href='/profile' />
        </Container>
    )
}