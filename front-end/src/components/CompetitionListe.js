import React, {Component} from 'react';
import ViewCompetition from './ViewCompetition';
import ReactDOM from 'react-dom';
import Update from './Update';
import AjoutCompetition from './AjoutCompetition';

function voir(){
    ReactDOM.render(<ViewCompetition/>,document.getElementById("nav-home")); 
}
function update(){
    ReactDOM.render(<Update/>,document.getElementById("nav-home")); 
}
function ajoutCompet(){
    ReactDOM.render(<AjoutCompetition/>,document.getElementById("nav-home")); 
}


function ListeCreater(){
    var table=[];
    table.push(
        <tr>
            <td>ensias world compétition</td>
            <td>11/03/2019</td>
            <td>11/04/2019</td>
            <td>11/05/2019</td>
            <td>application mobile</td>
            <td style={{width:'300'}}>
                <a className="d-inline btn btn-dark" href="#" onClick={()=>voir()}><span className="glyphicon glyphicon-eye-open"></span>Voir</a>
                <a className="d-inline btn btn-primary" href="#" onClick={()=>update()}><span className="glyphicon glyphicon-pencil"></span>Modifier</a>
                <a className="d-inline btn btn-danger" href="#"  data-toggle="modal" data-target="#exampleModal"><span className="glyphicon glyphicon-remove"></span>Supprimer</a>

            </td>
        </tr>);

       table.push(
        <tr>
            <td>world compétition 2018</td>
            <td>11/03/2019</td>
            <td>11/04/2019</td>
            <td>11/05/2019</td>
            <td>application mobile</td>
            <td style={{width:'300'}}>
                <a className="d-inline btn btn-dark" href="#" onClick={()=>voir()}><span className="glyphicon glyphicon-eye-open"></span>Voir</a>
                <a className="d-inline btn btn-primary" href="#" onClick={()=>update()}><span className="glyphicon glyphicon-pencil"></span>Modifier</a>
                <a className="d-inline btn btn-danger" href="#"  data-toggle="modal" data-target="#exampleModal"><span className="glyphicon glyphicon-remove"></span>Supprimer</a>

            </td>
        </tr>
       );
       table.push(
        <tr>
            <td>world compétition 2019</td>
            <td>11/03/2019</td>
            <td>11/04/2019</td>
            <td>11/05/2019</td>
            <td>application mobile</td>
            <td style={{width:'300'}}>
                <a className=" d-inline btn btn-dark" href="#" onClick={()=>voir()}><span className="glyphicon glyphicon-eye-open"></span>Voir</a>
                <a className="d-inline btn btn-primary" href="#" onClick={()=>update()}><span className="glyphicon glyphicon-pencil"></span>Modifier</a>
                <a className="d-inline btn btn-danger" href="#"  data-toggle="modal" data-target="#exampleModal"><span className="glyphicon glyphicon-remove"></span>Supprimer</a>

            </td>
         </tr>
       );
       table.push(
        <tr>
            <td>ensias world compétition</td>
            <td>11/03/2019</td>
            <td>11/04/2019</td>
            <td>11/05/2019</td>
            <td>application mobile</td>
            <td className="" style={{width:'300'}}>
                {/* on fait passé l'information de la ligne en paramettre dans voir() */}
                <a className="d-inline btn btn-dark" href="#" onClick={()=>voir()}><span className="glyphicon glyphicon-eye-open"></span>Voir</a>
                <a className="d-inline btn btn-primary" href="#" onClick={()=>update()}><span className="glyphicon glyphicon-pencil"></span>Modifier</a>
                <a className="d-inline btn btn-danger" href="#"  data-toggle="modal" data-target="#exampleModal"><span className="glyphicon glyphicon-remove"></span>Supprimer</a>

            </td>
        </tr>
       );
       return table;
}

class CompetitionListe extends Component {


    render(){
        return(
            <div >
                
                <h1 className="text-logo"><span className="glyphicon glyphicon-cutlery"></span> World-Compétition<span 
                        className="glyphicon glyphicon-cutlery"></span>
                </h1>
                <div className="container admin">
                    <div className="row">
                        <h1><strong>Liste des compétitions  </strong>
                            <a href="#" className="btn btn-success btn-lg" onClick={()=>ajoutCompet()}>
                                <span className="glyphicon glyphicon-plus">
                                </span>Ajouter
                            </a>
                        </h1>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Publication Date</th>
                                    <th>Registration deadline</th>
                                    <th>Soumission Deadline</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {ListeCreater()}
                            </tbody>

                        </table>    
                    </div>
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">ATTENTION!!!</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        ...voulez-vous vraimen supprimer ?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger">supprimer</button>
                                    </div>
                                    </div>
                                </div>
                            </div>

                </div>

            </div>
            
        );
    }
}
export default CompetitionListe;