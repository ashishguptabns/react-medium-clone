import { Container, EditCTA, HomeIcon, LeftContainer, ProfileImg, PublishButton, SearchBox, SearchInput, WriteBox } from './header-style';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useEffect } from 'react';
import { fetchUserDetailsUseCase } from '../../lib/data-service';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SearchDropdown } from './search-dropdown';

export const Header = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const [showWriteBox, setShowWriteBox] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)

    const articleId = useSelector(state => state.global.articleId)

    const fetchUserDetails = () => {
        fetchUserDetailsUseCase().then(data => setUser(data))
    }

    const handleHeaderItems = () => {
        const isEditing = window.location.pathname.includes('story')
        setShowWriteBox(!isEditing && process.env.NODE_ENV === "development")
        setShowSearchBox(!isEditing)
    }

    useEffect(() => {
        fetchUserDetails()
        handleHeaderItems()
    }, [articleId])

    const [showSearchDropDown, setShowSearchDropDown] = useState(false);

    const toggleDropdown = () => {
        setTimeout(() => {
            setShowSearchDropDown(!showSearchDropDown)
        }, 100);
    };

    return (
        <Container>
            <SearchDropdown isOpen={showSearchDropDown} />
            <LeftContainer>
                <HomeIcon href='/' aria-label="Home" />
                {showSearchBox && <SearchBox onFocus={toggleDropdown} onBlur={toggleDropdown}>
                    <SearchInput placeholder='Search' />
                </SearchBox>}
            </LeftContainer>
            {showWriteBox && <WriteBox href='/story/'>
                <EditNoteOutlinedIcon />
                <EditCTA>Write</EditCTA>
            </WriteBox>}
            <a aria-label="Profile" href="https://www.linkedin.com/in/ashishguptabns/" target="_blank" rel="noopener noreferrer">
                <ProfileImg
                    alt='Profile Image'
                    loading="lazy"
                    src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} />
            </a>
        </Container>
    )
}