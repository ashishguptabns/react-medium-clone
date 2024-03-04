import { NETWORK } from "./constants";
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

export const fetchArticlesUseCase = async (tag) => {
    let data
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'getArticles');
        const res = await fetch(url + `?tag=${tag}`);
        data = (await res.json());
    } catch (error) {
        console.error('fetchArticlesUseCase', error);
    }
    return data
}