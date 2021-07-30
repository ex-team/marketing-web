import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

const RootPath = process.env.REACT_APP_API_URL;

const Get = (path: string) => {
  return new Promise<any[]>((resolve, reject) => {
    axios.get(`${RootPath}/${path}`).then(
      result => {
        resolve(result.data);
      },
      err => {
        reject(err);
      }
    );
  });
};

const getBlogs = () => Get('post/?limit=0&offset=0&type=blogs');
const getDetailPost = slug => Get(`post/${slug}/`);
const getCategoryBlogs = () => Get('category/');

const API = {
  getBlogs,
  getDetailPost,
  getCategoryBlogs,
};

export default API;
