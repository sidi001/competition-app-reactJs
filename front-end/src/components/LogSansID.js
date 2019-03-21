import React, { Component } from 'react';
import RechercheResult from './RechercheResult';
import NavbarDessus from './NavbarDessus';
import Login from './login';



class LogSansID extends Component {
  render() {
    return (
        <div>
            <div><NavbarDessus/></div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top badge">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
                    <a className="nav-item navcolor navbar-brand nav-link btn" id="nav-home-tab" data-toggle="tab" href="#nav-home" aria-controls="nav-home" aria-selected="true">Home</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link navcolor btn"  href="#nav-profile">à propos </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navcolor btn" href="#nav-contact">Exemples de problemes </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navcolor btn" href="#nav-contact">Nos cours </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navcolor btn" href="#nav-contact">Contact </a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div className="row loginb content text-center">
                <div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><RechercheResult/></div>
                    </div>
                </div>
                <div className='login1' >
                    <Login/>
                </div>

            </div>
           
        </div>
        
      
    );
  }
}

export default LogSansID;
