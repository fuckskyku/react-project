import React, { Component } from 'react';
import './index.scss'
import Swiper from 'swiper'
import axios from 'axios'
import loading from '../assets/img/loading.gif'

const BoardItem = ({info}) => {
	return (
		<div className="swiper-slide">
			<div className="img-box">
				<img src={info.imageUrl} alt="" width="100%"/>
			</div>
		</div>
	)
}


class Banner extends Component {
	constructor(props){
		super(props)
		this.state = {
			boadList: [],
			loading: true
		}
	}
	getBoardList () {
		axios.get('/gy/v4/api/billboard/home').then( res => {
			//console.log(res.data.data.billboards)
			this.setState({
				boadList:res.data.data.billboards,
				loading: false
			})
			/*setTimeout(() => {
			new Swiper(this.el,{
				loop:true,
				pagination: {
					el: '.swiper-piganation'
				}
			})
		},0)*/
		})
	}

	componentWillMount () {
		this.getBoardList()
	}
	
	render() {
		let {boadList} = this.state
		return (
			this.state.loading
			?
			<div className="loading">
				<img src={loading} alt="" />
			</div>
			:
			<div ref={el => this.el = el} className="swiper-container banner">
				<div className="swiper-wrapper">
					{
						boadList.map(item => {
							return <BoardItem key={item.id} info={item}/>
						})
					}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		);
	}
	componentDidUpdate () {
		new Swiper(this.el,{
			loop:true,
			pagination: {
				el: '.swiper-pagination'
			}
		})
	}
}

export default Banner;
