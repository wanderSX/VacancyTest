import React, {Component} from 'react';
import { login } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginForm extends Component{

onFormSumbit(event) {
		event.preventDefault();
		console.log(event);
}

	render(){
		return(
			<div className="container1 center-block">
					<h3 className="text-center login-heading">
						<span className="glyphicon glyphicon-fire gold"></span> Login
					</h3>
					<form onSubmit={this.onFormSumbit} className="form-horizontal ">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Login"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password"/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-default center-block">Login &rarr;
								<span className="fa fa-long-arrow-right"></span>
							</button>
						</div>
					</form>	
			</div>
		);
	}
}

function mapStateToProps(auth){
	return { auth };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);