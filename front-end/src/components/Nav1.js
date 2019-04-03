import React, {Component} from 'react';

class Nav1 extends Component {
    render(){
        return(
             <nav className="nav navbar navbar-expand-sm  fixed-top" > 
                 <div className="container"> 
                     <div className="navbar-header"> 
                         <button type="button" class="btn btn-default navbar-brand btn-sm"> 
                             <span class="glyphicon glyphicon-home">  </span>  Accueil
                         </button> 
                     </div> 
                     <div className="navbar" id="#"> 
                         <ul className="nav navbar navbar-nav navbar-right"> 
                             <li>  <a href="#"> à propos </a>  </li> 
                             <li>  <a href="#"> EXEMPLES </a>  </li> 
                             <li>  <a href="#"> Nos COURS </a>  </li> 
                             <li>  <a href="#"> CONTACT </a>  </li> 
                         </ul> 
                     </div> 
                 </div> 
             </nav> 
            
        );
    }
}
export default Nav1;