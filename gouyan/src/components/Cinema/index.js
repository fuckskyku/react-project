import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import axios from 'axios'
import { Toast } from 'antd-mobile';
import './index.scss'

const BoardItem = ({info,toDetail}) => {
	toDetail = toDetail.bind(this,info.id)
	return (
		<div className="item animated bounceInLeft" onClick={toDetail}>
				<p className="title">
					<span>{info.name}</span><span className="sit">座</span>
					<i className="fa fa-angle-right"></i>
				</p>
				<p className="address">{info.address}</p>
				<p className="dis">距离未知</p>
		</div>

	)
}

class Cinema extends Component {

	constructor(props) {
		super(props)
		this.state = {
			List:[],
			loading: true
		}
		this.toDetail = this.toDetail.bind(this)
		this.getList = this.getList.bind(this)
		this.backTop = this.backTop.bind(this)
	}
	
	toDetail(id) {
		this.props.history.push(`/cinemasdetail/${id}`)
	}

	getList() {
		Toast.loading('Loading...');
		axios.get('/gy/v4/api/cinema').then(res => {
			console.log(res.data.data.cinemas)
			this.setState({
				List: res.data.data.cinemas,
				loading: false
			})
			Toast.hide()
		})
	}
	backTop() {
		let back = setInterval(() => {
		//获取当前页面滚动条纵坐标的位置
			if(document.body.scrollTop||document.documentElement.scrollTop){
			document.body.scrollTop -=50;
			document.documentElement.scrollTop-=50;
			}else {
			clearInterval(back)
			}
		})  		
	}
	
	handleScroll() {
		let back = document.getElementsByClassName('back-top')[0];
		if(document.documentElement.scrollTop + document.body.scrollTop > 50) {
			back.style.opacity = "1"
			
		} else{
			back.style.opacity = "0.1"
		}		
	}
	componentWillMount() {
		this.getList()
	}
	componentDidMount() {
		window.addEventListener('scroll',this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll',this.handleScroll);
	}
	render() {
		let {List} = this.state
		
		
		let select ={
			backgroundColor:'#F5F5F9',
			color:'#666',
		}
		let option ={
			backgroundColor:'#F5F5F9',
			color:'#666',
		}
		return (
			<div className="cinema">
				<NavBar
					mode="dark"
				>狗眼电影</NavBar>
				<div className="search">
					<div className="row">
						<div className="col-xs-2 left">
							<select className="" style={select}>
								<option value="0">重庆</option>
							</select>
						</div>
						<div className="col-xs-10 right">
							<input type="search" placeholder="搜索影院" />
						</div>
					</div>
				</div>
				<div className="content">
					
					{
						List.map(item => {
							return  <BoardItem toDetail={this.toDetail} info={item} key={item.id}/>
						}) 
					}
				</div>
				<i className="fa fa-eject back-top"  onClick={this.backTop}></i>
			</div>
		);
	}
}

export default Cinema
