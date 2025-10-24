export const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
export const getAccessToken = () => localStorage.getItem('accessToken');
export const setTemporaryToken = (token: string) => sessionStorage.setItem('temporaryToken', token);
export const getTemporaryToken = () => sessionStorage.getItem('temporaryToken');
