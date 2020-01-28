import { fetchUserInfo, fetchCommentItem, fetchList } from "../api/index.js";

export default {
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit("SET_USER", response.data);
    return response; //프로미스 chaining을 위한 return, 어떤 것을 리턴해도 프로미스 객체
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit("SET_ITEM", response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  }
};
