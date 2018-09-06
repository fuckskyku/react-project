import React, { Component } from 'react'
import './index.scss'

class Search extends Component {
  
    constructor (props) {
        super(props)
    }

	
    render () {			
        return (
					
            <div className="searchs">
				<div className="row">
					<div className="col-xs-10 left">
						<input type="search" placeholder="搜索影院" />
					</div>
					<div className="col-xs-2 right">
						<select className="">
							<option value="0">取消</option>
						</select>
					</div>
					
				</div>
			</div>
        )
    }
}

export default Search




