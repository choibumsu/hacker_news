import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchList, fetchUserInfo, fetchCommentItem };
