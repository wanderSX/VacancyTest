import React, {Component} from 'react';
import { tryLogin } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			username: '',
			password: '',
			processing: false 
		}
	}

onFormSumbit(event) {
		event.preventDefault();
		
		if(this.state.username && this.state.password) {
			this.setState({ processing: true })

			this.props.tryLogin(this.state)
				.then(() => {
					this.setState({ processing: false });
				});
		}
}

	render(){

		const LoginButton = (
				<button type="submit" className="btn btn-default center-block">Login &rarr;</button>
		);
	

		const ProcessingButton = (
				<button type="submit" className="btn btn-default center-block disabled">
					<span className="glyphicon glyphicon-cog"></span>
				</button>
		);
		

		if(this.props.auth === "Logged"){
			return (<h3 className="text-center">
								<span className="glyphicon glyphicon-ok green" /> Succesful logged
						 </h3>
			);
		}

		return(
			<div className="container center-block">
					<h3 className="text-center login-heading">
						<span className="glyphicon glyphicon-fire gold"></span> Login
					</h3>
					<form onSubmit={this.onFormSumbit.bind(this)} className="form-horizontal ">
						<div className={`form-group ${this.props.auth === "Denied" ? 'has-danger' : ''}`}>
							<input 
								value={this.state.username}
								onChange={(e) => this.setState({ username: e.target.value})}
								type="text" 
								className="form-control" 
								placeholder="Login"/>
						</div>
						<div className="form-group">
							<input 
								value={this.state.password}
								onChange={(e) => this.setState({ password: e.target.value})}
								type="password" 
								className="form-control"
								placeholder="Password"/>
						</div>
						<div className="form-group">
							{this.state.processing === true ? ProcessingButton : LoginButton}
						</div>
					</form>	
			</div>
		);
	}
}

function mapStateToProps({auth}){
	return { auth };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ tryLogin }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);