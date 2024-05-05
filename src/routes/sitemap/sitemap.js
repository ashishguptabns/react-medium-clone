import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    padding-bottom: 40px;
`
const Header = styled.p`
    font-size: 3rem;
`
const Link = styled.a`
    cursor: pointer;
`

export default function SiteMap() {
    return <Container>
        <Header>Sitemap</Header>
        <Header>React</Header>
        <Link href='https://www.codeforhire.xyz/?tag=React' target='blank'>Read articles on React</Link>
        <Header>Javascript</Header>
        <Link href='https://www.codeforhire.xyz/?tag=Javascript' target='blank'>Read articles on Javascript</Link>
        <Header>System Design</Header>
        <Link href='https://www.codeforhire.xyz/?tag=System%20Design' target='blank'>Read articles on System Design</Link>
        <Header>CSS</Header>
        <Link href='https://www.codeforhire.xyz/?tag=CSS' target='blank'>Read articles on CSS</Link>
        <Header>Node</Header>
        <Link href='https://www.codeforhire.xyz/?tag=Node' target='blank'>Read articles on Node</Link>
    </Container>
}