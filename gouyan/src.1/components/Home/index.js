import React, { Component } from 'react';
import './index.scss'
import Soon from './Soon'
import Show from './Show'

class Home extends Component {
	
	Tabs() {
		var head_list = document.getElementsByClassName("head_list")[0];
		var menu_content = document.getElementsByClassName("menu_content")[0];
		var oli = head_list.getElementsByTagName("li");//获取tab列表
		var toggle = menu_content.getElementsByClassName("toggle");//获取tab内容列表
		for(var i=0 ; i<oli.length ; i++){
			oli[i].index = i;//定义index变量，以便让tab按钮和tab内容相互对应
				oli[i].onclick = function( ){//移除全部tab样式和tab内容
				for(var i =0; i < oli.length; i++){
					oli[i].className = "";
					toggle[i].style.display = "none";
				}
				this.className = "active";//为当前tab添加样式
				toggle[this.index].style.display="block";//显示当前tab对应的内容
			}
		}
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
	
	componentDidMount() {
		this.Tabs()
		window.addEventListener('scroll',this.handleScroll);
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll',this.handleScroll);
	}
	
	
	render() {
		let Style1 = {
			display: 'block'
		}
		let Style2 = {
			display: 'none'
		}
		return (
			<div className="home">
				<header>狗眼电影</header>
				
				<div className="tab-bar">
					<div className="box">
						<ul className="head_list">
							<li className="active">正在热映</li>
							<li className="active">即将上映</li>
						</ul>
						<div className="menu_content">
							<div style={Style1} className="toggle"><Soon/></div>
							<div style={Style2} className="toggle"><Show/></div>
						</div>
					</div>
				</div>
				
				<i className="fa fa-home back-top"  onClick={this.backTop}></i>
			</div>
		);
	}
}

export default Home;
