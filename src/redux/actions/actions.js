import axios from 'axios';
// const url = "http://localhost:5000/api/"
const url =
  process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:5000/api/';
export function loadArticles() {
  return dispatch => {
    axios
      .get(`${url}articles`)
      .then(res => {
        const articles = res.data;
        dispatch({ type: 'LOAD_ARTICLES', articles });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export function loadProducts() {
  return dispatch => {
    axios
      .get(`${url}products`)
      .then(res => {
        const products = res.data;
        dispatch({ type: 'LOAD_PRODUCTS', products });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export function getUser(_id) {
  return axios
    .get(`${url}user/${_id}`)
    .then(res => res.data)
    .catch(err => console.log(err));
}
export function getUserProfile(_id) {
  return dispatch => {
    axios
      .get(`${url}user/profile/${_id}`)
      .then(res => {
        const profile = res.data;
        dispatch({ type: 'SET_PROFILE', profile });
      })
      .catch(err => console.log(err));
  };
}
export function getArticle(article_id) {
  return dispatch => {
    axios
      .get(`${url}article/${article_id}`)
      .then(res => {
        const article = res.data;
        dispatch({ type: 'VIEW_ARTICLE', article });
      })
      .catch(err => console.log(err));
  };
}
// article_id, author_id, comment
export function comment() {
  return dispatch => {};
}
// req.body.article_id
export function clap(article_id) {
  return dispatch => {
    axios
      .post(`${url}article/clap`, { article_id })
      .then(res => {
        dispatch({ type: 'CLAP_ARTICLE' });
      })
      .catch(err => console.log(err));
  };
}
// id, user_id
export function follow(id, user_id) {
  return dispatch => {
    axios
      .post(`${url}user/follow`, { id, user_id })
      .then(res => {
        dispatch({ type: 'FOLLOW_USER', user_id });
      })
      .catch(err => console.log(err));
  };
}
export function SignInUser(user_data) {
  return dispatch => {
    axios
      .post(`${url}user`, user_data)
      .then(res => {
        const user = res.data;
        localStorage.setItem('Auth', JSON.stringify(user));
        dispatch({ type: 'SET_USER', user });
      })
      .catch(err => console.log(err));
  };
}
export function toggleClose() {
  return dispatch => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: false });
  };
}
export function toggleOpen() {
  return dispatch => {
    dispatch({ type: 'TOGGLE_MODAL', modalMode: true });
  };
}

//booking actions

export function loadCities() {
  return dispatch => {
    axios
      .get(`${url}cities`)
      .then(res => {
        const cities = res.data;
        dispatch({ type: 'LOAD_CITIES', cities });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function loadShows(id = 1) {
  return dispatch => {
    axios
      .get(`${url}city/${id}`)
      .then(res => {
        const shows = res.data;
        dispatch({ type: 'LOAD_SHOWS', shows });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
