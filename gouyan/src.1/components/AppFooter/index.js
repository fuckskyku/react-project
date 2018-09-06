import React, { Component } from 'react';
import { NavLink } from 'react-router-dom' 
import './index.scss'


class AppFooter extends Component {
	renderNavs() {
		let {navs} = this.props
		return navs.map(item => (
			<NavLink to={item.path} key={item.id}>
				<i className={'fa fa-'+item.icon}></i>
				<span>{item.title}</span>
			</NavLink>
		))
	}

	render() {
		return (
			<footer className="app-footer">
				{this.renderNavs()}
			</footer>
		);
	}
}

AppFooter.defaultProps = {
	 navs: [
		{id:1,title:'首页',icon: 'home',path:'/home',exact:true},
		{id:2,title:'影院',icon: 'film',path:'/cinema'},
		{id:3,title:'我的',icon: 'user-o',path:'/mine'},
	]
}

export default AppFooter;
