import React, {Component} from 'react';
import LogAvecsID from './LogAvecID';
import ReactDOM from 'react-dom';


class login extends Component{

    connect(){
        ReactDOM.render( <LogAvecsID isFirst="0"/> ,document.getElementById("root"));
        ReactDOM.render( <span/> ,document.getElementById("logID"));
        
    }

    render(){
        return(
             <div className='text-right' > 
                 <form action="#"> 
                     <label className="text-center">  <a href="#">  <span class="glyphicon glyphicon-log-in text-center">  </span>  CONNEXION </a>  </label> 
                     <div className="form-group"> 
                         <label for="exampleInputEmail1"> Email address: </label> 
                         <input type="email" placeholder="email" className="form-control" id="email"/> 
                     </div> 
                     <div className="form-group"> 
                         <label for="exampleInputEmail1"> Password: </label> 
                         <input type="password" placeholder="password" className="form-control" id="pwd"/> 
                     </div> 
                     <div className="form-group"> 
                         <label for="sel1"> se connecter en tant que:
                             <select className="form-control input-sm" id="sel1"> 
                                 <option> Administrataire </option> 
                                 <option> Utilisateur </option> 
                                 <option> Jury </option> 
                             </select> 
                         </label> 
                     </div> 
                     <div className="form-group form-check"> 
                         <label className="form-check-label"> 
                         <input className="form-check-input" type="checkbox"/>  Remember me
                         </label> 
                     </div> 
                     <div> 
                         <a href="#" className="text-danger"> Mot de pass oublié ? </a> 
                     </div> 
                     <button type="submit" className="btn btn-primary" onClick={this.connect.bind(this)}> Login </button> 
                 </form> 
             </div> 
            
            
        );
    }
}

export default login;