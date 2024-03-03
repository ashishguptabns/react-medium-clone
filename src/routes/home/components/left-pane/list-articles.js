import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchArticlesUseCase } from "../../../../lib/data-service"
import { Article } from "./article"
import styled from "styled-components"
import { blankArticles } from "../../../../lib/mock-data"

const Container = styled.div`
    padding-top: 20px;
`

export const ListArticles = () => {
    const currTab = useSelector(state => state.home.currTab)
    const [articles, setArticles] = useState([])

    const fetchArticles = () => {
        setArticles(blankArticles[currTab])
        fetchArticlesUseCase(currTab).then(data => setArticles(data))
    }
    useEffect(() => {
        fetchArticles()
    }, [currTab])

    return (
        <Container>
            {articles && articles.length && articles.map(article => <Article key={article.id} article={article} />)}
        </Container>
    )
}