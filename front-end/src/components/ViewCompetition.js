import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import CompetitionListe from './CompetitionListe';


function retour(){
    ReactDOM.render( <CompetitionListe/> ,document.getElementById("nav-home")); 
}


class   ViewCompetition extends Component{
    render(){
        return(
                 <div className=""> 
                     <h1>  <strong> Voir un item   </strong>  </h1> 
                     <br/> 
                     <form> 
                         <div classNames="form-group"> 
                             <label className="badge badge-secondary">  Titre: </label> "le titre de la competition ici"
                         </div> 
                         <div classNames="form-group"> 
                             <label className="badge badge-secondary">  Description: </label> "description"
                         </div> 
                         <div classNames="form-group"> 
                             <label className="badge badge-secondary">  Pré-requis: </label> "pré-requis"
                         </div> 
                         <div classNames="form-group"> 
                             <label className="badge badge-secondary">  Categorie: </label> "les langages ici"
                         </div> 
                         <div classNames="form-group"> 
                             <label className="badge badge-secondary">  Date de publication: </label> "date../.../.."
                         </div> 
                         <div classNames="form-group"> 
                             <label className="badge badge-secondary">  Date de fin de candidature: </label> "dataaaaaaaa.../../..."
                         </div> 

                     </form> 
                     <div className="form-actions"> 
                         <a className="btn btn-primary" href="#" onClick={()=> retour()}>  <span className="glyphicon glyphicon-arrow-left">  </span> Retour </a> 

                     </div> 
                 </div> 
        );
    }
}

export default  ViewCompetition;