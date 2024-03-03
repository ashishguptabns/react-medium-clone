import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Container, HomeIcon, LeftContainer, NotifIcon, ProfileImg, SearchBox, SearchInput, WriteBox } from './header-style';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useEffect } from 'react';
import { fetchUserDetailsUseCase } from '../../lib/data-service';
import { useState } from 'react';

export const Header = () => {
    const [user, setUser] = useState({})

    const fetchUserDetails = () => {
        fetchUserDetailsUseCase().then(data => setUser(data))
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])

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
            <ProfileImg src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} href='/profile' />
        </Container>
    )
}