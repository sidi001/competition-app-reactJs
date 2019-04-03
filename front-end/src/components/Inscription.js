import React, {Component} from 'react';

class Inscription extends Component {
    render(){
        return(
            
             <div className="card" style={{width:'80%'}}> 
                   <div className="card-header"> 
                     <strong> Formulaire </strong>  User </div> 
                   <div className="card-body"> 
                     <form className="form-horizontal" action="" method="post" enctype="multipart/form-data"> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label"> User </label> 
                         <div className="col-md-9"> 
                           <p className="form-control-static"> Inscrivez-vous </p> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="text-input"> Nom </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Nom"/> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="text-input"> Prenom </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Prenom"/> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="email-input"> Email </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="email-input" type="email" name="email-input" placeholder="Enter Email"/> 
                           <span className="help-block"> Please enter your email </span> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="password-input"> Password </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="password-input" type="password" name="password-input" placeholder="Password"/> 
                           <span className="help-block"> Please enter a complex password </span> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="password-input"> Confirmer MotDePass </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="password-input" type="password" name="password-input" placeholder="RepeatPassword"/> 
                           <span className="help-block"> Please enter a conform passWord </span> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="date-input"> Date de Naissance </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="date-input" type="date" name="date-input" placeholder="date"/> 
                           <span className="help-block"> Please enter a valid date </span> 
                         </div> 
                       </div> 
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="disabled-input"> Fonction(étudiant,...) </label> 
                         <div className="col-md-9"> 
                           <input className="form-control" id="disabled-input" type="text" name="disabled-input" placeholder="Fonction" disabled=""/> 
                         </div> 
                       </div> 
                      
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="select1"> Sex </label> 
                         <div className="col-md-9"> 
                           <select className="form-control" id="select1" name="select1"> 
                             <option value="0"> Select Sex </option> 
                             <option value="1"> Homme </option> 
                             <option value="2"> Femme </option> 
                             <option value="3"> autres </option> 
                           </select> 
                         </div> 
                       </div> 
                      
                       <div className="form-group row"> 
                         <label className="col-md-3 col-form-label" for="file-input"> choisir image </label> 
                         <div className="col-md-9"> 
                           <input id="file-input" type="file" name="file-input"/> 
                         </div> 
                       </div> 
                     </form> 
                   </div> 
                   <div class="card-footer p-4"> 
              
                   <div className="card-footer"> 
                     <button class="btn btn-block btn-success" type="submit"> Create Account </button> 
                     <button className="btn btn-sm btn-danger" type="reset"> 
                       <i className="fa fa-ban">  </i>  Reset </button> 
                   </div> 
                   <div class="row"> 
                       <div class="col-6"> 
                         <button class="btn btn-block btn-facebook" type="button"> 
                           <span> facebook </span> 
                         </button> 
                       </div> 
                       <div class="col-6"> 
                         <button class="btn btn-block btn-twitter" type="button"> 
                           <span> twitter </span> 
                         </button> 
                       </div> 
                   </div> 
                 </div> 
               </div> 
          
        );
    }
}
export default Inscription;