import axios from "axios";
import { GET_POSTS_URL, GET_USERS_URL } from "../constants/api";

export const loadPosts = async () => await axios.get(GET_POSTS_URL);
export const loadUserInfo = async (userId) => await axios.get(`${GET_USERS_URL}/${userId}`);
export const loadUserPosts = async (userId) => await axios.get(`${GET_USERS_URL}/${userId}/posts`);
export const loadComments = async (postId) => await axios.get(`${GET_POSTS_URL}/${postId}/comments`);
