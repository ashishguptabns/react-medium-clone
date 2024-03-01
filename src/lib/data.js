import { articles, currUser, tabs } from "./mock-data"

export const fetchUserDetailsUseCase = () => {
    return currUser
}

export const fetchTabsUseCase = () => {
    return tabs
}

export const fetchArticlesUseCase = (currTab) => {
    return articles[currTab]
}