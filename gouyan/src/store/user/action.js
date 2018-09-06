import {CHANGE_USERNAME,EXIT} from './action-types'
export default {
	 login({username,password,success,fail}){
           return dispatch => {
           	  setTimeout(() => {
                    if(username ==='18883373625' && password === '30') {
                    	dispatch({
                    		 type:CHANGE_USERNAME,
                    		 userInfo:{
                    		 	username:'FuckSkyKu',
                    		 	signature:'pretty'
                    		 }
                    	})
                    	success()
                    	return;

                    }      
                        fail()
            
           	  },1000)
           }
	 },
	 exit () {
	 	return {
	 		type:EXIT
	 	}
	 }
}