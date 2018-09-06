
import React, { Component } from 'react'
import { Route, Switch,withRouter} from 'react-router-dom'
import './index.scss'
import axios from 'axios'
class Details extends Component {
  
    constructor (props) {
        super(props)
         this.state = {
             film: {},
             loading:true
        }

        this.getDetail = this.getDetail.bind(this)
    }
     getDetail () {
        console.log(this.props)
        const {id} = this.props.match.params;

         axios.get(`/mz/v4/api/film/${id}`).then (res => {
            this.setState({
                 film: res.data.data.film,
                 loading: false
            })
      })
            
    }
     componentDidMount () {
        this.getDetail ()
     }
    render () {

        return (

        this.state.loading
        ?
            <div className="loading"></div>
        :
    
            <div>{this.state.film.name}</div>
        )
    }
}

export default withRouter(Details)




