import { LOGIN_ATTEMPT } from '../actions/index.js';

export default function(state = null, action) {
	switch(action.type){
		case LOGIN_ATTEMPT:
			return action.payload.Auth;
		default:
			return state;	
	}


}