import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
import LoginForm from './LoginForm'

class Login extends Component {
	render() {
		return (
			<div className="login animated jello">
				<header>
					<div className="back">
						<Link to='/'>
						<i className="fa fa-angle-left"></i>
						</Link>
						
					</div>
				</header>
				<LoginForm history={this.props.history}/>
			</div>
		);
	}
}

export default Login;
