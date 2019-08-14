import config from "../config/config"

const url = config.API;

export const getJobId = () => {
    const pathname = window.location.pathname.split('/');
    return pathname[pathname.length - 1];
}

export const regexChange = (id) =>  {
    return id.replace(/^(.{200}[^\s]*).*/, "$1");
}

export const query = async (id, onFetchData) => {
    const res = await fetch(`${url}${id}`);
    const data = await res.json();
    onFetchData(data);
  }