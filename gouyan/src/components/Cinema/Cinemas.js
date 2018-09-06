import React, { Component } from 'react';
import axios from 'axios'
import { Toast } from 'antd-mobile';
import './index.scss'

class Cinemas extends Component {

	constructor(props) {
		super(props)
		this.state = {
			List:[],
			loading: true,
		}
		this.getList = this.getList.bind(this)
	}
	


	getList () {
		Toast.loading('Loading...');
		axios.get('/gy/v4/api/cinema').then(res => {
			console.log(res.data.data.cinemas)
			this.setState({
				List: res.data.data.cinemas,
				loading: false,
			})
			Toast.hide()
		})
	}

	componentWillMount () {
		this.getList()
	}


	render() {
		let {List} = this.state
		return (
			this.state.loading
			?
			<div className="loading">
				
			</div>
			:	
			<div>
				mdzz
			</div>
		);
	}
}

export default Cinemas
