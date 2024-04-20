import { ShimmerDiv } from "../../../../ui/loading/shimmer-div"
import { Container, CenteredRow, ProfileImg, UpdatedTime, UserName, Heading, Description, ArticleImg, HrefContainer, ArticleTextContainer } from "./article-style"
import { useMetaData } from "./use-metadata"

const PlaceholderArticle = () => {
    return (
        <Container>
            {/* <CenteredRow>
                <ProfileImg src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt="placeholder" />
                <ShimmerDiv w='200px' h='20px' />
            </CenteredRow> */}
            <CenteredRow>
                <div style={{ width: '100%' }}>
                    <ShimmerDiv w='100%' h='20px' />
                    <ShimmerDiv w='100%' h='100px' />
                </div>
                {/* <ArticleImg /> */}
            </CenteredRow>
        </Container>
    )
}
export const Article = ({ article }) => {
    const [title, desc] = useMetaData(article)

    return (
        <>
            {!title && <PlaceholderArticle />}
            {title && <HrefContainer aria-label={title} to={`/story/${article.id}`}>
                <Container>
                    {/* <CenteredRow>
                        <ProfileImg src={article.usrImgUrl} alt={`profile-img${title}`} />
                        <UserName>{article.username}</UserName>
                        <UpdatedTime>{article.updatedAt}</UpdatedTime>
                    </CenteredRow> */}
                    <CenteredRow>
                        <ArticleTextContainer>
                            <Heading>
                                {title}
                            </Heading>
                            <Description>
                                {desc}
                            </Description>
                        </ArticleTextContainer>
                        {/* <ArticleImg
                            alt={title}
                            loading="lazy"
                            src={article.imgUrl} /> */}
                    </CenteredRow>
                </Container>
            </HrefContainer>}
        </>
    )
}