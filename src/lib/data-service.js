import { useSelector } from "react-redux";
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
    let data
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'articles');
        const res = await fetch(url + `?tag=${tag}`);
        data = await res.json()
    } catch (error) {
        console.error('fetchArticlesUseCase', error);
    }
    return data
}

export const uploadFile = async (file) => {
    const articleId = (window.location.href).split('/').at(-1)
    const formData = new FormData();
    formData.append("file", file);
    try {
        const networkHost = NETWORK.HOST;
        const url = networkHost.replace('operationId', 'image');
        const res = await fetch(`${url}/${articleId}`, {
            method: 'POST',
            body: formData,
        })
        if (!res.ok) {
            throw new Error(`Failed to upload file: ${res.statusText}`);
        }
        const data = await res.json()
        console.log('uploadFile', data)
        return data.url
    } catch (error) {
        console.error('postBlockUseCase', error);
    }
    return ''
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