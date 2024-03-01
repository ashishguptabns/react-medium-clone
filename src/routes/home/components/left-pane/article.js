import { Container, CenteredRow, ProfileImg, UpdatedTime, UserName, Heading, Description, ArticleImage } from "./article-style"

export const Article = ({ article }) => {
    return (
        <Container>
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
        </Container>
    )
}