import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CompetitionListe from './CompetitionListe';


function retour(){
    ReactDOM.render( <CompetitionListe/> ,document.getElementById("nav-home")); 
}

class Update extends Component{
    render(){
        return(
             <div className="container col-sm-6 admin"> 
                 <div className="row"> 
                     <h1>  <strong> Ajouter un item   </strong>  </h1> 
                     <br/> 
                     <form className="form" action="insert.php" method="post" enctype="multipart/form-data"> 
                         <div className="form-group"> 
                             <label for="name">  Titre: </label> 
                             <input type="text" className="form-control" id="name" name="name" placeholder="ancien Nom" value="ancien valll"/> 
                             <span className="help-inline"> "aide...." </span> 
                         </div> 
                         <div className="form-group"> 
                             <label for="description">  Description: </label> 
                             <input type="text" className="form-control" id="description" name="description" placeholder="ancien description" value="ancien valll"/> 
                             <span className="help-inline text-danger"> "help-lineeee" </span> 

                         </div> 
                         <div className="form-group"> 
                             <label for="price">  Pre-requis:(en $) </label> 
                             <input type="number" step="0,01" className="form-control" id="price" name="price" placeholder="ancien prix" value="ancien valll"/> 
                             <span className="help-inline text-danger"> "help-lineeee" </span> 
                         </div> 
                         <div className="form-group"> 
                             <label for="category">  Categorie: </label> 
                             <select className="form-control" id="category" name="category"> 
                                 <option value="ancien vallloption1">  ajouter++ </option> 
                                 <option value="ancien vallloption2">  option1  </option> 
                                 <option value="ancien vallloption3">  option2  </option> 
                                 <option value="ancien vallloption3">  option3  </option> 
                               
                             </select> 
                             <span className="help-inline text-danger">  message d'erreur ici  </span> 
                         </div> 
                         <div className="form-group"> 
                             <label for="price">  Date de pub:  </label> 
                             <input type="number" step="0,01" className="form-control" id="dateDeb" name="dateDeb" placeholder="ancien ../../...." value="ancien valll"/> 
                             <span className="help-inline text-danger">  "help-lineeee"  </span> 
                         </div> 
                         <div className="form-group"> 
                             <label for="price">  Date limite de soumission:  </label> 
                             <input type="number" step="0,01" className="form-control" id="dateFin" name="dateFin" placeholder="ancien ../../...." value="ancien valll"/> 
                             <span className="help-inline text-danger">  "help-lineeee"  </span> 
                         </div> 
                         <div className="form-group"> 
                             <label for="image">  Selectionner une image: </label> 
                             <input type="file" id="image" name="image" /> 
                             <span className="help-inline text-danger"> message d'erreur ici apres tout test </span> 
                         </div> 

                    
                         <div className="form-actions"> 
                             <button type="submit" className="btn btn-success" onClick={()=> retour()}>  <span className="glyphicon glyphicon-pencil">  </span>  Ajouter </button> 
                             <a className="btn btn-primary" href="#" onClick={()=> retour()}>  <span className="glyphicon glyphicon-arrow-left">  </span> Retour </a> 

                         </div> 
                     </form> 
                
                
                 </div> 
             </div>    
        );
    }
}

export default Update;