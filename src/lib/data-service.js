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

export const postArticleUseCase = async () => {
    let data
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'postArticle');
        const res = await fetch(url, {
            method: 'POST'
        });
        data = (await res.json());
    } catch (error) {
        console.error('postArticleUseCase', error);
    }
    return data
}

export const postBlockUseCase = (block) => {
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'postBlock');
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(block)
        }).then(console.log);
    } catch (error) {
        console.error('postBlockUseCase', error);
    }
}