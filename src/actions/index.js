import axios from 'axios';

const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';


export function login(props){
	const request = axios.post(`http://localhost:8080/login`, props);

	return {
		type: LOGIN_ATTEMPT,
		payload: request
	};
}