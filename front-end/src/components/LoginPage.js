import React, {Component} from 'react';
import LogAvecsID from './LogAvecID';
import ReactDOM from 'react-dom';


class LoginPage extends Component {

      connect(){
        ReactDOM.render( <LogAvecsID isFirst="0"/> ,document.getElementById("root"));
        ReactDOM.render( <span/> ,document.getElementById("logID"));
        
      }
    render(){
        return(
            
           <div className="container"> 
           <div className="row justify-content-center"> 
             <div className="col-md-8"> 
               <div className="card-group"> 
                 <div className="card p-4"> 
                   <div className="card-body"> 
                     <h1> Login </h1> 
                     <p className="text-muted"> se connecter à votre compte </p> 
                     <div className="input-group mb-3"> 
                       <div className="input-group-prepend"> 
                         <span className="input-group-text"> 
                           <i className="icon-user">  </i> 
                         </span> 
                       </div> 
                       <input className="form-control" type="text" placeholder="NomUtilisateur"/> 
                     </div> 
                     <div className="input-group mb-3"> 
                       <label className="input-group"> 
                         <div className="input-group-prepend"> 
                           <span className="input-group-text"> 
                             <i className="icon-lock">  </i> 
                           </span> 
                         </div> 
                         <input className="form-control " type="password" placeholder="Password"/>  
                       </label> 
                       <div className="form-group"> 
                             <label for="sel1"> 
                                 <select className="form-control input-sm" id="sel1"> 
                                     <option> Mode de connexion </option> 
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
                     </div> 
                     <div className="row"> 
                       <div className="col-6">
                         <button className="btn btn-primary px-4" type="button" onClick={this.connect.bind(this)}> Login </button> 
                       </div> 
                       <div className="col-6 text-right"> 
                         <button className="btn btn-link px-0" type="button"> Forgot password? </button> 
                       </div> 
                     </div> 
                   </div> 
                 </div> 
                 <div className="card text-white bg-primary py-5 d-md-down-none" style={{width:'44%'}}> 
                   <div className="card-body text-center"> 
                     <div> 
                       <h2> s'inscrire </h2> 
                       <p> ça depend mais vous devez vous connecter sur notre plateforme pour faciler l'accesible, alors qui dit la famine dirt soldat au ma . </p> 
                       <button className="btn btn-primary active mt-3" type="button"> s'enregistrer maintenant! </button> 
                     </div> 
                   </div> 
                 </div> 
               </div> 
             </div> 
           </div> 
         </div> 
          
        );
    }
}
export default LoginPage;