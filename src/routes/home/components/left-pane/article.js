import { useState } from "react"
import { ShimmerDiv } from "../../../../ui/loading/shimmer-div"
import { Container, CenteredRow, ProfileImg, UpdatedTime, UserName, Heading, Description, ArticleImg, HrefContainer, ArticleTextContainer } from "./article-style"
import { useEffect } from "react"
import { htmlToPlainText } from "./helper"

const PlaceholderArticle = () => {
    return (
        <Container>
            <CenteredRow>
                <ProfileImg src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt="placeholder"/>
                <ShimmerDiv w='200px' h='20px' />
            </CenteredRow>
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
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
        if (article && article.blocks) {
            for (const block of article.blocks) {
                if (block.type === 'header') {
                    setTitle(block.data.text)
                }
                if (block.type === 'paragraph') {
                    const plainText = htmlToPlainText(block.data.text);
                    setDesc(plainText)
                    break
                }
            }
        }
    }, [])

    return (
        <>
            {!title && <PlaceholderArticle />}
            {title && <HrefContainer href={`/story/${article.id}`}>
                <Container>
                    <CenteredRow>
                        <ProfileImg src={article.usrImgUrl} />
                        <UserName>{article.username}</UserName>
                        {/* <UpdatedTime>{article.updatedAt}</UpdatedTime> */}
                    </CenteredRow>
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