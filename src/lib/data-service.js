import { articles, currUser, tabs } from "./mock-data"

export const fetchUserDetailsUseCase = async () => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(currUser)
        }, 2000);
    })
    return data
}

export const fetchTabsUseCase = async () => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(tabs)
        }, 2000);
    })
    return data
}

export const fetchArticlesUseCase = async (currTab) => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(articles[currTab])
        }, 2000);
    })
    return data
}