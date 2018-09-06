import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import action from '../../../store/user/action'
import './index.scss'


class User extends Component {
	render() {
		return (
			<div className = "mine-user page-footer">
                <div className = "bg-box">
                
                </div>
                <div className = "info-box">
                    <h3 className = "user-name">FuckSkyKu</h3>
                    <p className = "user-signature">MDZz</p>
                    <button onClick={this.props.exit}>Quit~</button>              
                </div>   
				<div className="item">
					<ul>
						<li className="list">
							<i className="fa fa-ticket icon icon1"></i>
							<span className="title">影票订单</span>
							<span className="msg">
								<span className="value">0</span>
								<span className="text">张</span>
								<i className="fa fa-angle-right"></i>
							</span>
						</li>
						<li className="list">
							<i className="fa fa-hourglass-half icon icon2"></i>
							<span className="title">影票待付订单</span>
							<span className="msg">
								<span className="value">0</span>
								<span className="text">张</span>
								<i className="fa fa-angle-right"></i>
							</span>
						</li>
						<li className="list">
							<i className="fa fa-ship icon icon3"></i>
							<span className="title">商城订单</span>
							<span className="msg">
								<span className="value"></span>
								<span className="text"></span>
								<i className="fa fa-angle-right"></i>
							</span>
						</li>
						<li className="list">
							<i className="fa fa-money icon icon4"></i>
							<span className="title">我的现金券</span>
							<span className="msg">
								<span className="value">0</span>
								<span className="text">张</span>
								<i className="fa fa-angle-right"></i>
							</span>
						</li>
						<li className="list">
							<i className="fa fa-jpy icon icon5"></i>
							<span className="title">账户余额</span>
							<span className="msg">
								<span className="value">0</span>
								<span className="text t">元</span>
								<i className="fa fa-spinner"></i>
							</span>
						</li>
						<li className="list">
							<i className="fa fa-ticket icon icon6"></i>
							<span className="title">我的卖座卡</span>
							<span className="msg">
								<span className="value">0</span>
								<span className="text">张</span>
								<i className="fa fa-angle-right"></i>
							</span>
							
						</li>
						<li className="list">
							<i className="fa fa-cog icon icon7"></i>
							<span className="title">设置</span>
							<span className="msg">
								<span className="value"></span>
								<span className="text"></span>
								<i className="fa fa-angle-right"></i>
							</span>
						</li>
					</ul>
				</div>
            </div>
		);
	}
}

export default connect(state => state,
						dispatch => {
							return bindActionCreators(action,dispatch)
						}
	            )(User);