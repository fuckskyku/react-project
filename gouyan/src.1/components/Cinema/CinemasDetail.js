import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs,Badge } from 'antd-mobile';
import axios from 'axios'
import './index.scss'
import loading from '../assets/img/loading.gif'
import cinema from '../assets/img/cinema.png'

class CinemasDetail extends Component {
  
    constructor (props) {
    	super(props)
    	this.state = {
    		cinema: {},
    		loading: true
    	}
    	this.getDetail = this.getDetail.bind(this)
    }
    	
    getDetail() {
    	console.log(this.props)
    	const {id} = this.props.match.params;
    				
    	axios.get(`/gy/v4/api/cinema/${id}`).then (res => {
    		console.log(res.data.data.cinema)
    		this.setState({
    			cinema: res.data.data.cinema,
    			loading: false
    		})
    	}) 
    	
    }
	
	
	componentDidMount() {
		this.getDetail()	
	}
	
	
	
    render () {		
		
		const tabs = [
			{ title: <Badge><p><i className="fa fa-ticket"></i></p><p>取票</p></Badge> },
			{ title: <Badge><p><i className="fa fa-handshake-o"></i></p><p>3D</p></Badge> }, 
			{ title: <Badge><p><i className="fa fa-product-hunt"></i></p><p>停车</p></Badge> },
			{ title: <Badge><p><i className="fa fa-gift"></i></p><p>优惠</p></Badge> },
			{ title: <Badge><p><i className="fa fa-bus"></i></p><p>交通</p></Badge> },
		];

		
        return (
			this.state.loading
			?
			<div className="loading">
				<img src={loading} alt="" />
			</div>
			:	
			<div>
				<div>
				
				</div>
				<div className="cinemasdetail">
					<NavBar
						mode="dark"
						icon={<Icon type="left" />}
						onLeftClick={() => this.props.history.go(-1)}
					>
						狗眼电影
					</NavBar>
					<div className="pic">
						<img src={cinema} alt=""/>
					</div>
					<ul>
						<li className="row">
							<div className="icon col-xs-2 left"><i className="fa fa-film"></i></div>
							<div className="box col-xs-10 right">
								<span>订座票</span>
								<button>立即订座</button>
								<p>选好场次及座位，到影院自助机取票</p>
							</div>
							
						</li>
						<li className="row">
							<div className="icon col-xs-2 left"><i className="fa fa-map-marker"></i></div>
							<div className="box col-xs-10 right">{this.state.cinema.address}</div>
						</li>
						<li className="row">
							<div className="icon col-xs-2 left"><i className="fa fa-phone"></i></div>
							<div className="box col-xs-10 right">{this.state.cinema.telephones}</div>
						</li>
					</ul>
								
					<div>
						<Tabs tabs={tabs}
							initialPage={1}
							onChange={(tab, index) => { console.log('onChange', index, tab); }}
							onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
						>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '155px', backgroundColor: '#fff' }}>
								暂无信息1
							</div>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '155px', backgroundColor: '#fff' }}>
								{this.state.cinema.services[1].description}
							</div>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '155px', backgroundColor: '#fff' }}>
								{this.state.cinema.services[0].description}
							</div>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '155px', backgroundColor: '#fff' }}>
								暂无信息4
							</div>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '155px', backgroundColor: '#fff' }}>
								{this.state.cinema.bus!==''? this.state.cinema.bus : '暂无信息'}
							</div>
						</Tabs>
						
							
					</div>
				</div>
				
			</div>
            
        )
    }
}

export default withRouter(CinemasDetail)




