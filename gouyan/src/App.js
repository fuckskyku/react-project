import React, { Component } from 'react';
import {Home,Cinema,List,Cars,Mine,Details,Dlist,Soon,Show,CinemasDetail} from './components'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import AppFooter from './components/AppFooter'

class App extends Component {

   rendeFooter () {
    //console.log(this)
     //if(this.props.location.pathname !== '/mine/login')
    // return <AppFooter/>
    let { pathname } = this.props.location
    let no_footer_pathnames = ['/mine/login','/details']
    if(no_footer_pathnames.indexOf(pathname)>-1)return ''
    return <AppFooter/>
   }
  
  
    render() {
		let {routes} = this.props
		return (
			<div className="App"> 
				<Switch>
					{
						routes.map(item => {
							return <Route path={item.path} component={item.component} key={item.id}/>
						})
					}
					<Redirect to='/home'/>
				</Switch>
				{this.rendeFooter()}
			</div>
		);
	}

}
    
App.defaultProps = {
   routes: [
       {id:1,path:'/home',component: Home},
       {id:2,path:'/home/soon',component: Soon},
       {id:3,path:'/home/show',component: Show},
       {id:4,path:'/cinema',component: Cinema},
       {id:5,path:'/list',component: List},
       {id:6,path:'/cars',component: Cars},
       {id:7,path:'/mine',component: Mine},
       {id:8,path:'/details/:id',component: Details},
			 {id:9,path:'/cinemasdetail/:id',component: CinemasDetail},
       {id:10,path:'/dlist:id',component: Dlist}
				
    ]
}


export default withRouter(App);
