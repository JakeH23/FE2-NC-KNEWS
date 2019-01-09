import Axios from 'axios';
export const getUser = async (username) => {
	const { data } = await Axios.get(`https://jhnc-news.herokuapp.com/api/users/${username}`);
	return data.user;
};
