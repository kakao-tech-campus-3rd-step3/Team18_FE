export const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
export const getAccessToken = () => localStorage.getItem('accessToken');
export const removeAccessToken = () => localStorage.removeItem('accessToken');
export const setTemporaryToken = (token: string) => sessionStorage.setItem('temporaryToken', token);
export const removeTemporaryToken = () => sessionStorage.removeItem('temporaryToken');
export const getTemporaryToken = () => sessionStorage.getItem('temporaryToken');
