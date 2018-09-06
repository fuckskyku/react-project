import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import axios from 'axios'
import './index.scss'
import loading from '../assets/img/loading.gif'

class Details extends Component {
  
    constructor (props) {
        super(props)
		this.state = {
			film: {},
			loading: true
        }
        this.getDetail = this.getDetail.bind(this)
		this.timestampToTime = this.timestampToTime.bind(this)
    }
	
     getDetail () {
        console.log(this.props)
        const {id} = this.props.match.params;
					
		axios.get(`/gy/v4/api/film/${id}`).then (res => {
			console.log(res.data.data.film)
            this.setState({
				film: res.data.data.film,
				loading: false
            })
		}) 
		
    }
	
	timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        //let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? (date.getMonth()+1) : date.getMonth()+1);
        let D = date.getDate();
        //let h = date.getHours() + ':';
        //let m = date.getMinutes() + ':';
        //let s = date.getSeconds();
				
				let time = `${M}月${D}日上映`;

        return time;
    }
    
	
	componentDidMount () {
		this.getDetail ()	
	}
	
    render () {			
        return (
			this.state.loading
			?
			<div className="loading">
				<img src={loading} alt="" />
			</div>
			:						
            <div className="detail">
				<NavBar
					mode="dark"
					icon={<Icon type="left" />}
					onLeftClick={() => this.props.history.go(-1)}
				>
					狗眼电影
				</NavBar>
				<div className="img">
					<img src={this.state.film.cover.origin} alt=""/>
				</div>
				<div className="flim-intro">
					<div className="title">影片简介</div>
					<div className="flim-item">
						<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演</span>
						<span className="mg6">:</span>
						<span>{this.state.film.director}</span>
					</div>
					<div className="flim-item">
						<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演</span>
						<span className="mg6">:</span>
						<span>
							{
								this.state.film.actors.map( (item,k) => {
									
							    	return <span key={k}>{item.name}|</span>
									}
								)
							}
						</span>
					</div>
					<div className="flim-item">
						<span>地区语言</span>
						<span className="mg6">:</span>
						<span>{this.state.film.nation}({this.state.film.language})</span>
					</div>
					<div className="flim-item">
						<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</span>
						<span className="mg6">:</span>
						<span>{this.state.film.category}</span>
					</div>
					<div className="flim-item">
						<span>上映日期</span>
						<span className="mg6">:</span>
						<span>{this.timestampToTime(this.state.film.premiereAt)}</span>
					</div>
					<div className="words">
						<p className="content">{this.state.film.synopsis}</p>
					</div>
					
					<div className="btn">
						<button>立即购票</button>
					</div>
				</div>
				
				
			</div>
        )
    }
}

export default withRouter(Details)




