import styled from "styled-components"
import { CenteredRow } from "../home/components/left-pane/article-style"
import { ShimmerDiv } from "../../ui/loading/shimmer-div"

export const Container = styled.div`
    position: absolute;
    width: 70%;
    padding: 20px;
    @media (max-width: 700px) {
        width: 90%;
        padding: 5%;
    }
`
export const PlaceholderStory = () => {
    return (
        <Container>
            <CenteredRow>
                <div style={{ width: '100%' }}>
                    <ShimmerDiv w='60%' h='60px' />
                    <ShimmerDiv w='90%' h='40px' />
                    <ShimmerDiv w='80%' h='60px' />
                    <ShimmerDiv w='70%' h='100px' />
                </div>
            </CenteredRow>
        </Container>
    )
}