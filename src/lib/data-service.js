import { articlesCache } from "./cache";
import { NETWORK } from "./constants";
import { currUser, tabs } from "./mock-data"

export const fetchUserDetailsUseCase = async () => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(currUser)
        }, 200);
    })
    return data
}

export const fetchTabsUseCase = async () => {
    const data = await new Promise((res, rej) => {
        setTimeout(() => {
            res(tabs)
        }, 200);
    })
    return data
}

export const fetchArticlesUseCase = async (tag) => {
    if (!tag) {
        return []
    }
    let data = articlesCache[tag]
    if (data?.length) {
        return data
    }
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'articles');
        const res = await fetch(url + `?tag=${tag}`);
        data = await res.json()
    } catch (error) {
        console.error('fetchArticlesUseCase', error);
    }
    articlesCache[tag] = data
    return data
}

export const fetchArticleUseCase = async (id) => {
    let data
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'article');
        const res = await fetch(`${url}/${id}`);
        data = (await res.json());
    } catch (error) {
        console.error('fetchArticleUseCase', error);
    }
    return data
}

export const postArticleUseCase = async () => {
    let data
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'article');
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
        const url = networkHost.replace('operationId', 'block');
        fetch(`${url}/${block.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(block)
        }).then();
    } catch (error) {
        console.error('postBlockUseCase', error);
    }
}

export const deleteBlockUseCase = (block) => {
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'block');
        fetch(`${url}/${block.articleId}/${block.id}`, {
            method: 'DELETE',
        })
            .then();
    } catch (error) {
        console.error('postBlockUseCase', error);
    }
}

export const patchArticleUseCase = (articleId, payload) => {
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'article');
        fetch(`${url}/${articleId}`, {
            method: 'PATCH',
            body: JSON.stringify(payload)
        })
            .then();
    } catch (error) {
        console.error('patchArticleUseCase', error);
    }
}