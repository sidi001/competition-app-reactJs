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





class LogSansID extends Component {

    constructor(props){
        super(props);
        this.state={
            value0:'block',
            value1:'none',
            value2:'none',
            value3:'none',
            value4:'none',
            value5:'none',

        };
            console.log("if111111111");
        
    }

    

    num0(){
        ReactDOM.render(<Accueil/>,document.getElementById('nav-home'))
        this.setState({
            value0:'block',
            value1:'none',
            value2:'none',
            value3:'none',
            value4:'none',
            value5:'none',
        })

    }
    num1(){
        this.setState({
            value0:'none',
            value1:'block',
            value2:'none',
            value3:'none',
            value4:'none',
            value5:'none',
        })
    }
    num2(){
        this.setState({
            value0:'none',
            value1:'none',
            value2:'block',
            value3:'none',
            value4:'none',
            value5:'none',
        })
    }
    num3(){
        this.setState({
            value0:'none',
            value1:'none',
            value2:'none',
            value3:'block',
            value4:'none',
            value5:'none',
        })
    }
    num4(){
        this.setState({
            value0:'none',
            value1:'none',
            value2:'none',
            value3:'none',
            value4:'block',
            value5:'none',
        })
    }
    num5(){
        this.setState({
            value0:'none',
            value1:'none',
            value2:'none',
            value3:'none',
            value4:'none',
            value5:'block',
        })
    }

  render() {
    return (
        <div>
            <div><NavbarDessus/></div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top badge navClass">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse " id="navbarTogglerDemo01" >
                    <a className="nav-item navcolor navbar-brand nav-link btn" id="nav-home-tab"  onClick={this.num0.bind(this)} >Home</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item block">
                            <a className="nav-link navcolor btn"  href="#nav-profile" onClick={this.num1.bind(this)}> à propos </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num2.bind(this)}> Exemples de problemes </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num3.bind(this)}> Nos cours </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num4.bind(this)}> Contact </a>
                        </li>
                        <li className="nav-item fixed-right">
                            <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num5.bind(this)}>  Inscrivez-vous </a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div className="row container content text-center">
                <div className="fenetreClass">
                    <div className="tab-content" id="nav-tabContent">
                        
                        <div className="tab-pane fade show block" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style={{display:this.state.value0}}>
                            <Accueil/>
                        </div>
                        <div className="tab-pane fade show block"  role="tabpanel" aria-labelledby="nav-home-tab" style={{display:this.state.value1}}>
                            <Apropos />
                        </div>
                        <div className="tab-pane fade show block"  role="tabpanel" aria-labelledby="nav-home-tab" style={{display:this.state.value2}}>
                            <ExemplesDeProblemes/>
                        </div>
                        <div className="tab-pane fade show block"  role="tabpanel" aria-labelledby="nav-home-tab" style={{display:this.state.value3}}>
                            <NosCours />
                        </div>
                        <div className="tab-pane fade show block"  role="tabpanel" aria-labelledby="nav-home-tab" style={{display:this.state.value4}}>
                            <Contact/>
                        </div>
                        <div className="tab-pane fade show block"  role="tabpanel" aria-labelledby="nav-home-tab" style={{display:this.state.value5}}>
                            <Inscription/>
                        </div>
                    </div>
                </div>
                <div className="loginClass" >
                    <Login/>
                </div>

            </div>
           
        </div>
        
      
    );
  }
}

export default LogSansID;
