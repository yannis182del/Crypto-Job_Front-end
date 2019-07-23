export const getJobId = () => {
    const pathname = window.location.pathname.split('/');
    return pathname[pathname.length - 1];
}