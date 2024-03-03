import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Container, EditCTA, HomeIcon, LeftContainer, NotifIcon, ProfileImg, SearchBox, SearchInput, WriteBox } from './header-style';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useEffect } from 'react';
import { fetchUserDetailsUseCase } from '../../lib/data-service';
import { useState } from 'react';

export const Header = () => {
    const [user, setUser] = useState({})
    const [showWriteBox, setShowWriteBox] = useState(false)

    const fetchUserDetails = () => {
        fetchUserDetailsUseCase().then(data => setUser(data))
    }

    const handleHeaderItems = () => {
        setShowWriteBox(!window.location.pathname.includes('new-story'))
    }
    useEffect(() => {
        fetchUserDetails()
        handleHeaderItems()
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
            {showWriteBox && <WriteBox href='/new-story'>
                <EditNoteOutlinedIcon />
                <EditCTA>Write</EditCTA>
            </WriteBox>}
            <NotifIcon href='/notif'>
                <NotificationImportantOutlinedIcon />
            </NotifIcon>
            <ProfileImg src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} href='/profile' />
        </Container>
    )
}