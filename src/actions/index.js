import axios from 'axios';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const ROOT_URL = 'http://localhost:8080'

export function tryLogin(props){
	
	const request = axios.post(`${ROOT_URL}/login`, JSON.stringify(props));

	return {
		type: LOGIN_ATTEMPT,
		payload: request
	};

}