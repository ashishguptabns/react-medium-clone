const interceptors = [];

export function addInterceptor(interceptor) {
    interceptors.push(interceptor);
}

export function removeInterceptor(interceptor) {
    const index = interceptors.indexOf(interceptor);
    if (index !== -1) {
        interceptors.splice(index, 1);
    }
}

export function interceptFetch() {
    const realFetch = window.fetch;
    window.fetch = function (...args) {
        const [url, options = {}] = args;
        const modifiedOptions = {
            ...options,
            headers: {
                ...(options.headers || {}),
                'Authorization': process.env.REACT_APP_Authorization,
            }
        };
        const interceptedFetch = realFetch.apply(this, [url, modifiedOptions]);
        interceptors.forEach(interceptor => interceptedFetch.then(interceptor));
        return interceptedFetch;
    };
}
