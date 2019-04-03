import React, {Component} from 'react';

import ensiasLogo from '../images/ensiasLogo.jpeg';
import competitionLogo1 from '../images/competionLogo1.jpeg';
import competitionLogo2 from '../images/competitionLogo2.jpeg';

class Accueil extends Component {
    render(){
        return(
            <div >
                <div className="card">
                  <div className="card-header">
                    <i className="fa fa-align-justify"></i> ENSIAS
                    <small>world compétition</small>
                  </div>
                  <div className="card-body">
                    <div className="carousel slide" id="carouselExampleCaptions" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li className="active" data-target="#carouselExampleCaptions" data-slide-to="0"></li>
                        <li  data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li  data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [800x400]" src={ensiasLogo}
                            data-holder-rendered="true"  width="350" height="350"/>
                          <div className="carousel-caption d-none d-md-block bg0">
                            <h3>ENSIAS COMPETITIONS</h3>
                            <p>les compétitions organisées par l'ENSIAS ou au sein de l'école nationale supérieure de l'informatique et d'analyse de systeme.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [800x400]" src={competitionLogo1}
                            data-holder-rendered="true"/>
                          <div className="carousel-caption d-none d-md-block bg0">
                            <h3>2019 world compétition</h3>
                            <p>le gagant de la competiton "le mondial 2019"</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100 " data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Third slide [800x400]" src={competitionLogo2}
                            data-holder-rendered="true"/>
                          <div className="carousel-caption d-none d-md-block bg0">
                            <h3>2018 wold compétition</h3>
                            <p>le gagant de la competiton "le mondial 2019".</p>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev bg0" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next bg0" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                    <h1>OBJECTIFS</h1>
                    <p>
                    Consciente des opportunités qu’offre la technologie mobile aux problèmes d’accessibilité, l’ENSIAS en collaboration avec l'association e-MOBADARA, lance la première Compétition Nationale Access’Apps 2019 des applications mobiles destinées à offrir des services efficaces et adaptés aux personnes en situation de handicap.
Cette compétition est une opportunité pour les développeurs de faire preuve de créativité et d’innovation technologique au service du handicap, en développant des applications mobiles accessibles visant à faciliter la vie des marocains en situation de handicap. 
Des prix seront attribués aux meilleures applications accessibles sélectionnées par le jury de la compétition. La sélection se fera par catégories (handicap Physique, handicap Cognitif et Neurologique) et sous-catégorie d’Handicap (Non-voyant, Mal-voyant,Autisme, Trisomie...).
                    </p>
                </div>

            </div>
            
            
        );
    }
}
export default Accueil;