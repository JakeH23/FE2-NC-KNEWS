import axios from 'axios';

export const getUser = async (username) => {
	const { data } = await axios.get(`https://jhnc-news.herokuapp.com/api/users/${username}`);
	return data.user;
};
