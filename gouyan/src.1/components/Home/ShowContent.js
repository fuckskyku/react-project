import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import './index.scss'
import loading from '../assets/img/loading.gif'

const BoardItem = ({info,toDetail}) => {
	toDetail = toDetail.bind(this,info.id)
	return (
		<div className="img-box" onClick={toDetail}>
			<img src={info.cover.origin} alt="" width="100%"/>
			<div className="text">
				<div className="col-xs-10 left">
					<p>{info.name}</p>
					<p className="count"><span>{info.cinemaCount}</span>家影院上映 <span>{info.watchCount}</span>人购票</p>
				</div>
				
				<span className="col-xs-2 right">{info.grade}</span>
			</div>
		</div>
	)
}

class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comeList:[],
			loading: true
		}
		this.toDetail=this.toDetail.bind(this)
	}

	toDetail (id) {
		//console.log(this.props)
		this.props.history.push(`/details/${id}`)
	}

	
	
	getComeList () {
		axios.get('/gy/v4/api/film/coming-soon').then(res => {
			console.log(res.data.data.films)
			this.setState({
				comeList: res.data.data.films,
				loading: false
			})
		})
	}
	
	componentWillMount () {
		this.getComeList()
	}

	render() {		
		let {comeList} = this.state
		return (
			this.state.loading
			?
			<div className="loading">
				<img src={loading} alt="" />
			</div>
			:		
			<div className="content">
				<div className="line">
					<span>即将上映</span>
					<hr/>
				</div>

				{
					comeList.map(item => {
				 		return  <BoardItem toDetail = {this.toDetail} info={item} key={item.id}/>
					}) 
				}
				<div className="more">
					<button>更多即将上映电影</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Content);
