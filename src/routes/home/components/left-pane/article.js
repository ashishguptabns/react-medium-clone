import { ShimmerDiv } from "../../../../ui/loading/shimmer-div"
import { Container, CenteredRow, ProfileImg, UpdatedTime, UserName, Heading, Description, ArticleImage } from "./article-style"

const PlaceholderArticle = () => {
    return (
        <Container>
            <CenteredRow>
                <ProfileImg src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' />
                <ShimmerDiv w='200px' h='20px' />
            </CenteredRow>
            <CenteredRow>
                <div style={{ width: '100%' }}>
                    <ShimmerDiv w='100%' h='20px' />
                    <ShimmerDiv w='100%' h='100px' />
                </div>
                <ArticleImage />
            </CenteredRow>
        </Container>
    )
}
export const Article = ({ article }) => {
    return (
        <>
            {!article.title && <PlaceholderArticle />}
            {article.title && <Container>
                <CenteredRow>
                    <ProfileImg src={article.usrImgUrl} />
                    <UserName>{article.username}</UserName>
                    <UpdatedTime>{article.updatedAt}</UpdatedTime>
                </CenteredRow>
                <CenteredRow>
                    <div>
                        <Heading>
                            {article.title}
                        </Heading>
                        <Description>
                            {article.desc}
                        </Description>
                    </div>
                    <ArticleImage src={article.imgUrl} />
                </CenteredRow>
            </Container>}
        </>
    )
}