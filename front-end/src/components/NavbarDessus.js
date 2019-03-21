import React, {Component} from 'react';
import logo from '../images/logo.png';

class NavbarDessus extends Component {
    render(){
        return(
            <div>
                <br/>
                <br/>
                <nav className="navbar navbar-light navhauter bg-light" >

                    <div classNameName="jumbotron">
                    <div classNameName="container text-center">
                        <a classNameName="navbar-brand">
                            <img classNameName="mr-3" src={logo} alt="kkk" width='100' height='40'/>
                        </a>
                        <p>World Compétition</p>
                    </div>
                    </div>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">chercher</button>
                    </form>
                </nav>

            </div>
            
        );
    }
}
export default NavbarDessus;