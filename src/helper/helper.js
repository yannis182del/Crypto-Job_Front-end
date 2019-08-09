export const getJobId = () => {
    const pathname = window.location.pathname.split('/');
    console.log(pathname[pathname.length - 1])
    return pathname[pathname.length - 1];

}

export const regexChange = (id) =>  {
    return id.replace(/^(.{200}[^\s]*).*/, "$1");
}
