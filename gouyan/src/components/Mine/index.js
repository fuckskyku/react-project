import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import './index.scss'
import Login from './Login'
import User from './User'

class Mine extends Component {

  //当我切换到mine组件的时候 如果没有登录 应该跳到Login组件 如果登陆了跳user子路由
   checkLogin(props) {
      let _props = props || this.props
      let {path} = _props.match
      if(!_props.user.userInfo){
        console.log('没登陆')
        _props.history.push(`${path}/login`)
      }else{
       console.log('登陆了')
        _props.history.push(`${path}/user`)
      }
   }

   componentWillMount () {
     this.checkLogin()
   }
   //当属性发生改变的时候生命周期函数是componentWillReceiveProps
  //当store里的数据发生改变的时候 容器组件会给ui组件传新的属性，这个生命周期的钩子会执行

  componentWillReceiveProps (props) {

     if(props.user.userInfo !== this.props.user.userInfo){
        this.checkLogin(props)
     }
  }



  render() {
  	//console.log(this)
  	let {path} = this.props.match
    return (
      <div className="Mine">
        <Route path={`${path}/login`} component={Login}/>
        <Route path ={`${path}/user`} component={User}/>
      </div>
    );
  }
}

export default connect(state=>state)(Mine);
