import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Container, EditCTA, HomeIcon, LeftContainer, NotifIcon, ProfileImg, PublishButton, SearchBox, SearchInput, WriteBox } from './header-style';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useEffect } from 'react';
import { fetchUserDetailsUseCase } from '../../lib/data-service';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { publishArticle } from '../../global-slice';

export const Header = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const [showWriteBox, setShowWriteBox] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)
    const [showPublishBtn, setShowPublishBtn] = useState(false)

    const fetchUserDetails = () => {
        fetchUserDetailsUseCase().then(data => setUser(data))
    }

    const handleHeaderItems = () => {
        const isEditing = window.location.pathname.includes('new-story')
        setShowWriteBox(!isEditing)
        setShowSearchBox(!isEditing)
        setShowPublishBtn(isEditing)
    }
    const handlePublish = () => {
        dispatch(publishArticle())
    }
    useEffect(() => {
        fetchUserDetails()
        handleHeaderItems()
    }, [])

    return (
        <Container>
            <LeftContainer>
                <HomeIcon href='/' />
                {showSearchBox && <SearchBox>
                    {/* <SearchIcon /> */}
                    <SearchInput placeholder='Search' />
                </SearchBox>}
            </LeftContainer>
            {showWriteBox && <WriteBox href='/new-story'>
                <EditNoteOutlinedIcon />
                <EditCTA>Write</EditCTA>
            </WriteBox>}
            {/* <NotifIcon href='/notif'>
                <NotificationImportantOutlinedIcon />
            </NotifIcon> */}
            {showPublishBtn && <PublishButton onClick={handlePublish}>Publish</PublishButton>}
            <ProfileImg src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} href='/profile' />
        </Container>
    )
}