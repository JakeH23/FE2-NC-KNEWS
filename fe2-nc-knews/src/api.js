import axios from 'axios';

const BASE_URL = 'https://jhnc-news.herokuapp.com/api';

export const getUser = async (username) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async (topic) => {
  const url = topic
    ? `${BASE_URL}/topics/${topic}/articles?sort_by=created_at`
    : `${BASE_URL}/articles?sort_by=created_at`;
  const { data } = await axios.get(url);
  return data.articles;
};
