import React , {Component} from 'react';
import User from './User';

class Users extends Component{

    state = {
     
        users : [
            
            {name : "ram" , age : 40},
            {name : "sita" , age : 50},
            {name : "piku" , age : 60},

        ],
        title : "Users List"

};


makeMeYoung = () => {

    const newState = this.state.users.map((user)=>{
        
        
        const tempUser = user ;
        if(tempUser.age>0){
            tempUser.age -=10;  
            return tempUser ;
        }
        else{
         
            tempUser.age = 'NA';  
            return tempUser ;

        }
      
    });
  this.setState({

    newState

  });

}


    render(){
        return (

         <div>
             <button onClick={this.makeMeYoung}>Click me to change the age</button>

             <br/>
        <h1>{this.state.title}</h1>
             {
             this.state.users.map((user)=>{
              
                return <User age = {user.age}>{user.name}</User>


             })
             }
         
         
         </div>

            
        )

        }
    }

export default Users ; 