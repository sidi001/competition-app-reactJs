import React, {Component} from 'react';

import evaluationLogo from '../images/evaluationLogo.png';
import soumissionLogo from '../images/soumissionLogo.jpeg';

class Apropos extends Component {
    render(){
        return(
            <div className="container" >
                <div className="container">
                    <h1>OBJECTIFS</h1>
                    <p>
                    Consciente des opportunités qu’offre la technologie mobile aux problèmes d’accessibilité, l’ENSIAS en collaboration avec l'association e-MOBADARA, lance la première Compétition Nationale Access’Apps 2019 des applications mobiles destinées à offrir des services efficaces et adaptés aux personnes en situation de handicap.
Cette compétition est une opportunité pour les développeurs de faire preuve de créativité et d’innovation technologique au service du handicap, en développant des applications mobiles accessibles visant à faciliter la vie des marocains en situation de handicap. 
Des prix seront attribués aux meilleures applications accessibles sélectionnées par le jury de la compétition. La sélection se fera par catégories (handicap Physique, handicap Cognitif et Neurologique) et sous-catégorie d’Handicap (Non-voyant, Mal-voyant,Autisme, Trisomie...).
                    </p>
                </div>
                <div className="container row">
                    
                    <h1>Procédure d'évaluation des<span className="badge badge-secondary">Solutions</span></h1>
                    <img className="d-block w-300 d-inline"  alt="First slide [800x400]" src={evaluationLogo}
                                data-holder-rendered="true"  />
                               
                    <p className="text-capitalize d-inline font-2xl">L’évaluation se déroule en deux étapes :</p>
                        <div  >
                            <i className="d-inline icons  mt-5 cui-arrow-right"></i>
                            <h5 className="d-inline ">Le jury de la compétition sélectionne les projets qui sont opérationnels et qui répondent au thème de la compétition.
                            </h5>
                        </div>
                        <div  className="">
                            <i className="d-inline icons  mt-5 cui-arrow-right"></i>
                            <h5 className="d-inline">Le jury évalue les projets selon la catégorie et le type de l’application.
                            </h5>
                        </div>
                        <div>
                            <h4 className="d-inline ">Les critères d’évaluations sont:</h4>
                            <div className="container">
                            <ul className="list-group">
                                <li className="list-group-item">L’originalité et l’innovation;</li>
                                <li className="list-group-item">Les services;</li>
                                <li className="list-group-item">L'ergonomie selon le public cible;</li>
                                <li className="list-group-item">La rapidité et la fluidité de l’application.</li>
                            </ul>
                            </div>
                        </div>
                </div>


                    <div className="container">
                        <div className="row">
                            <h1>Soumission des Projets <span className="badge badge-secondary">APK</span></h1>
                            <img className="d-block w-300 d-inline"  alt="First slide [800x400]" src={soumissionLogo}
                                        data-holder-rendered="true" />
                            <h2>Conditions de soumission :</h2>
                            <p>Les applications mobiles soumises doivent être développées pour le système d’exploitation Android. Le thème de l'application doit cibler principalement une catégorie d’handicap (physique ou cognitif) et une sous-catégorie (non-voyant, mal-entendant, autisme...).
                            </p>
                        </div>

                        

                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-align-justify"></i> Procédure de soumission :
                                <small>app</small>
                            </div>
                            <div class="card-body">
                                <div id="accordion" role="tablist">
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingOne" role="tab">
                                        <h5 class="mb-0">
                                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">1: prémier projet</a>
                                        </h5>
                                        </div>
                                        <div class="collapse show" id="collapseOne" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">Si c'est votre première soumission :
    Vous cliquez sur soumettre pour remplir un formulaire concernant les données personnelles : nom, email et le numéro de téléphone et les informations relatives au projet : nom du projet, la 
    catégorie, la sous-catégorie, un résumé et un document pdf (qui décrit votre projet à savoir l'essence du projet, les technologies utilisées, le public cible, quelques captures ecrans...). 
    Après soumission vous recevrez un accusé de réception électronique concernant votre compte (login et mot de passe).</div>
                                        </div>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingTwo" role="tab">
                                        <h5 class="mb-0">
                                            <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">2: déjà soumis ?</a>
                                        </h5>
                                        </div>
                                        <div class="collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">Si vous avez déjà soumissionné un projet :
    Vous avez normalement reçu un mail qui contient votre login et mot de passe. Vous accédez à votre espace (via se connecter) pour compléter les informations de votre projet à savoir l'APK ou le lien du téléchargement/installation et le buisness plan. Vous pouvez par la suite ajouter, supprimer ou modifier un projet. Vous pouvez aussi ajouter les membres de l'équipe si votre projet est le fruit d'un travail collaboratif. Le même projet ne peut être déposé que par un seul membre d’équipe.
     Les membres d'un projet recevront aussi un mail en tant que membre du projet.</div>
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
export default Apropos;