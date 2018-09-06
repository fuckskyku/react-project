
import React, { Component } from 'react'
import './index.scss'
import { NavBar, Icon } from 'antd-mobile';

class Dlist extends Component {
  
    
    render () {
        return (
             <div className="detail">
               <NavBar
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => this.props.history.go(-1)}
                >狗眼电影</NavBar>
                https:/ /m.maizuo.com/v4/#!/cinema
             </div>

           )
}

}
export default Dlist;




