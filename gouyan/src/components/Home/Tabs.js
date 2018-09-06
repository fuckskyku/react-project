import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Soon from './Soon'
import Show from './Show'

const Styles = {
	li1: {
		color: "blue",
		background: "red",
		float: "left",
		listStyle: "none",
		margin: "10px"
	},
	li2: {
		color: "white",
		background: "black",
		float: "left",
		listStyle: "none",
		margin: "10px"
	}
}

// 对Route 进行一次封装， 当点击 link 触发的时候，包裹 该link 的 route 的path 吻合也会触发，
// 然后判断 match 是否存在，存在的话 就设置一个样式，不存在的话设置另一个样式
const MenuItem = ({ to, text }) => {
	return <Route path={to} children={
		({ match }) => {
		console.log(match,"match")
	return <Link to={to}>
	<li style={match ? Styles.li1 : Styles.li2}>{text}</li>
	</Link>
	}} />
};



class Tabs extends Component {

	render() {
		return (
			<Router>
				<div style={{margin:"40px"}}>
					<div style={{overflow:"hidden"}}>
						<MenuItem to="/home/soon" text="主页" />
						<MenuItem to="/home/show" text="登录" />
					</div>
					<hr/>
					<div style={{textAlign:"left"}}>
						<Route path="/home/soon" component={Soon} />
						<Route path="/home/show" component={Show} />
					</div>		
				</div>
			</Router>
		);
	}
}

export default Tabs