import { LOGIN_ATTEMPT } from '../actions/index.js';

export default function(state = null, action) {
	console.log('reducerIn');
	switch(action.type){
		case LOGIN_ATTEMPT:
		{
			return action.payload.data.Auth;
		}
		default:
			return state;	
	}


}