import React, { Component } from 'react';
import RechercheResult from './RechercheResult';
import ReactDOM from 'react-dom';
import NavbarDessus from './NavbarDessus';
import Login from './login';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import NosCours from './NosCours';
import Inscription from './Inscription';
import ExemplesDeProblemes from './ExemplesDeProblemes';
import LoginPage from './LoginPage'







class LogSansID extends Component {

    constructor(props){
        super(props);
         
        
    }

    

    num0(){
        ReactDOM.render( <Accueil/> ,document.getElementById("nav-home"));
        ReactDOM.render( <Login/> ,document.getElementById("logID"));
        

    }
    num1(){
        ReactDOM.render( <Apropos/> ,document.getElementById("nav-home"));
        ReactDOM.render( <Login/> ,document.getElementById("logID"));
        
    }
    num2(){
        ReactDOM.render( <ExemplesDeProblemes/> ,document.getElementById("nav-home"));
        ReactDOM.render( <Login/> ,document.getElementById("logID"));
        
    }
    num3(){
        ReactDOM.render( <NosCours/> ,document.getElementById("nav-home"));
        ReactDOM.render( <Login/> ,document.getElementById("logID"));
       
    }
    num4(){
        ReactDOM.render( <Contact/> ,document.getElementById("nav-home"));
        ReactDOM.render( <Login/> ,document.getElementById("logID"));
        
    }
    num5(){
        ReactDOM.render( <Inscription/> ,document.getElementById("nav-home"));
        ReactDOM.render( <span/> ,document.getElementById("logID"));
        
    }
    num6(){
        ReactDOM.render( <LoginPage/> ,document.getElementById("nav-home"));
        ReactDOM.render( <span/> ,document.getElementById("logID"));
        
    }
    

  render() {
    return (
         <div > 
             <div >  <NavbarDessus/>  </div> 
             <nav className="btn navbar navbar-expand-lg navbar-light fixed-top badge navClass"> 
                 <button className="navbar-toggler pull-light card-header-actions" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"> 
                     <span className="navbar-toggler-icon"/> 
                 </button> 

                 <div className="collapse navbar-collapse " id="navbarTogglerDemo01" > 
                     <a className="nav-item navcolor navbar-brand nav-link btn" id="nav-home-tab"  onClick={this.num0.bind(this)} > Home </a> 
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> 
                         <li className="nav-item block"> 
                             <a className="nav-link navcolor btn"  href="#nav-profile" onClick={this.num1.bind(this)}>  à propos  </a> 
                         </li> 
                         <li className="nav-item"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num2.bind(this)}>  Exemples de problemes  </a> 
                         </li> 
                         <li className="nav-item"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num3.bind(this)}>  Nos cours  </a> 
                         </li> 
                         <li className="nav-item"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num4.bind(this)}>  Contact  </a> 
                         </li> 
                         <li className="nav-item fixed-right"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num5.bind(this)}>   Inscrivez-vous  </a> 
                         </li> 
                     </ul> 

                     <div className="card-header-actions "> 
                       <a className="" href="#"  onClick={this.num6.bind(this)}> 
                       <i className="icons font-2xl d-block cui-user">  </i> se connecter
                       </a> 
                     </div> 

                 </div> 
                
             </nav> 
             <div className="d-flex flex-row container content text-center col-sm" > 
                 <div className="fenetreClass"> 
                     <div className="tab-content" id="nav-tabContent"> 
                         <div className="tab-pane show block" id="nav-home" style={{display:'block'}} > 
                             <Accueil/> 
                         </div> 
                        
                     </div> 
                 </div> 
                 <div className="loginClass" id="logID"> 
                     <Login/> 
                 </div> 

             </div> 
           
         </div> 
        
      
    );
  }
}

export default LogSansID;
