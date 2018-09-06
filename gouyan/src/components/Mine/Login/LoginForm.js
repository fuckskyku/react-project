import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import action from '../../../store/user/action'
import './index.scss'


class LoginForm extends Component {
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit (e) {//登录函数
		e.preventDefault()
		let {history,login} = this.props
		login({
			username:this.username.value,
			password:this.password.value,
			success () {
             	//alert('登录成功')
             	history.replace('/mine/user')
			},
			fail () {
				alert('失败')
			}
		})
	}
	
	render() {
	    return (
	        <form className="login-form" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input type="text" ref={input => this.username = input} className="form-control" placeholder="输入手机号"/>
					<div className="input-bg"></div>
				</div>  
	            <div className="form-group">
					<input type="password" ref={input =>this.password = input} className="form-control" placeholder="输入密码"/>
					<div className="input-bg"></div>
				</div> 
				<button type="submit" className="button">登陆</button>      
	        </form>
	    );
	}
}
                               
export default connect(state => state,
                        dispatch => {
							return bindActionCreators(action,dispatch)
						}
	            )(LoginForm);
