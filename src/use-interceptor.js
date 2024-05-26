import { useEffect } from 'react';
import { addInterceptor, interceptFetch, removeInterceptor } from './networkInterceptor.js';

export const useInterceptor = () => {
    useEffect(() => {
        interceptFetch()
        const interceptor = (requestDataOrResponse) => {
        };
        addInterceptor(interceptor);
        return () => {
            removeInterceptor(interceptor);
        };
    }, []);
}