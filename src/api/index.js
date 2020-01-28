import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchCommentItem(id) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchList, fetchUserInfo, fetchCommentItem };
